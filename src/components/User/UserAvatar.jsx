import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";

const UserAvatar = () => {
  const { selectedUser } = useContext(FinderContext);
  return (
    <div className='relative'>
      <img
        src={selectedUser.avatar_url}
        alt='avatar'
        className='max-w-xs rounded-lg mr-6 opacity-80'
      />
      <div className='absolute flex flex-col bottom-4 left-6'>
        <span className='text-lg font-bold'>{selectedUser.name}</span>
        <span>{selectedUser.login}</span>
      </div>
    </div>
  );
};

export default UserAvatar;
