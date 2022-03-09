import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className='bg-gray-700 text-white flex rounded-xl shadow-md'>
      <img
        src={user.avatar_url}
        alt='avatar'
        className='w-12 h-12 rounded-full m-3'
      />
      <div className='flex flex-col justify-center truncate'>
        <h3 className='text-lg truncate'>{user.login}</h3>
        <Link to={`/user/${user.login}`}>
          <button
            type='button'
            className='text-xs text-slate-400 hover:text-slate-200 mt-1 cursor-pointer'
          >
            Visit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
