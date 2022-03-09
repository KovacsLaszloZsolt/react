import React, { createContext, useReducer, useState } from "react";
import finderReducer from "./finderReducer";

const FinderContext = createContext(null);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const FinderProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    selectedUser: {},
    selectedUserRepos: [],
  };

  const [state, dispatch] = useReducer(finderReducer, initialState);

  const [searchValue, setSearchValue] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const fetchUsers = async () => {
    dispatch({ type: "IS_LOADING" });
    const params = new URLSearchParams({
      q: searchValue,
    });
    const response = await fetch(
      `${GITHUB_URL}/search/users?${params}`
      // , {
      //   headers: {
      //     Authorization: `token ${GITHUB_TOKEN}`,
      //   },
      // }
    );

    const data = await response.json();
    dispatch({ type: "GET_USERS", payload: data.items });
  };

  const fetchSelectedUser = async (login) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    const user = await response.json();
    dispatch({
      type: "GET_SELECTED_USER",
      payload: user,
    });
  };

  const fetchSelectedUserRepos = async (login) => {
    dispatch({ type: "SET_LOADING" });
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);

    const repos = await response.json();
    dispatch({
      type: "GET_SELECTED_USER_REPOS",
      payload: repos,
    });
  };

  return (
    <FinderContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        selectedUser: state.selectedUser,
        selectedUserRepos: state.selectedUserRepos,
        fetchSelectedUserRepos,
        fetchSelectedUser,
        fetchUsers,
        searchValue,
        setSearchValue,
        isSearched,
        setIsSearched,
      }}
    >
      {children}
    </FinderContext.Provider>
  );
};

export default FinderContext;
