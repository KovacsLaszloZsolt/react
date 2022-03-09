import React from "react";

const UserSocListItem = ({ className, title, value, icon }) => {
  return (
    <li className={`flex w-3/12 justify-between px-6 ${className}`}>
      <div className='flex flex-col'>
        <span className='text-xs text-gray-400'>{title}</span>
        <span className='font-bold text-lg'>{value}</span>
      </div>
      {icon}
    </li>
  );
};

export default UserSocListItem;
