import React, { useContext } from "react";
import RepoListItem from "./RepoListItem";
import FinderContext from "../../context/FinderContext";

const RepoList = () => {
  const { selectedUserRepos } = useContext(FinderContext);

  return (
    <div className='bg-gray-600 shadow-lg p-4 rounded-md'>
      <h2 className='text-2xl '>Latest Repositories</h2>
      <ul className='flex my-4 w-full py-2 rounded-md flex flex-col'>
        {selectedUserRepos.map((repo) => (
          <RepoListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
