import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import UserSocList from "./UserSocList";
import FinderContext from "../../context/FinderContext";
import RepoList from "../Layout/RepoList";
import { Oval } from "react-loader-spinner";
import UserBioInfo from "./UserBioInfo";
import UserAvatar from "./UserAvatar";

const UserDetailsPage = () => {
  const login = useParams().login;
  const {
    isLoading,
    selectedUser,
    selectedUserRepos,
    fetchSelectedUser,
    fetchSelectedUserRepos,
  } = useContext(FinderContext);

  useEffect(() => {
    fetchSelectedUser(login);
    fetchSelectedUserRepos(login);
  }, [login]);

  return (
    <main className='flex flex-col items-center'>
      {isLoading && (
        <div className='self-center mt-10'>
          <Oval color='#00BFFF' height={80} width={80} />
        </div>
      )}
      {selectedUser && selectedUserRepos && (
        <div className='max-w-screen-lg mx-auto mt-12 text-white'>
          <Link to='/'>
            <button
              className='mb-6 flex items-center hover:text-gray-400'
              // onClick={() => setCurrentUser(null)}
            >
              <FaArrowLeft className='mr-2' />
              BACK TO SEARCH
            </button>
          </Link>
          <div className='flex'>
            <UserAvatar />
            <UserBioInfo />
          </div>
          <UserSocList />
          <RepoList />
        </div>
      )}
    </main>
  );
};

export default UserDetailsPage;
