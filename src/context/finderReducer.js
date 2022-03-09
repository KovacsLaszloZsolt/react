const finderReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    case "GET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
        isLoading: false,
      };
    case "GET_SELECTED_USER_REPOS":
      return {
        ...state,
        selectedUserRepos: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default finderReducer;
