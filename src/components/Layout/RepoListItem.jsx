import React from "react";
import { BiLink } from "react-icons/bi";
import { BsEyeFill, BsStarFill } from "react-icons/bs";
import { FaInfo, FaUtensils } from "react-icons/fa";
import InfoCard from "../User/InfoCard";

const RepoListItem = ({ repo }) => {
  return (
    <li className='flex flex-col bg-gray-700 mb-2 rounded p-3'>
      <h3 className='flex flex-row items-center text-lg'>
        <BiLink className='text-xl mr-1' />
        {repo.name}
      </h3>
      {repo.description && (
        <p className='text-sm ml-1 mb-1 text-gray-400'>{repo.description}</p>
      )}
      <div className='flex flex-row'>
        <InfoCard
          uniqeClass='text-blue-500 font-bold '
          content={repo.watchers}
          icon={<BsEyeFill className='mr-1' />}
        />
        <InfoCard
          uniqeClass='text-green-500 font-bold '
          content={repo.stargazers}
          icon={<BsStarFill className='mr-1' />}
        />
        <InfoCard
          uniqeClass='text-red-500 font-bold '
          content={repo.open_issues}
          icon={<FaInfo className='mr-1' />}
        />
        <InfoCard
          uniqeClass='text-yellow-500 font-bold '
          content={repo.forks}
          icon={<FaUtensils className='mr-1' />}
        />
      </div>
    </li>
  );
};

export default RepoListItem;
