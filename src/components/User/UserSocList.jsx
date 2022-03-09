import React, { useContext } from "react";
import UserSocListItem from "./UserSocListItem";
import FinderContext from "../../context/FinderContext";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";

const UserSocList = () => {
  const { selectedUser } = useContext(FinderContext);
  return (
    <ul className='flex my-10 w-full bg-gray-600 shadow-lg py-2 rounded-md'>
      <UserSocListItem
        className='border-r border-gray-500'
        title='Followers'
        value={selectedUser.followers ? selectedUser.followers : 0}
        icon={<FaUsers className='text-purple-700 text-4xl' />}
      />
      <UserSocListItem
        className='border-r border-gray-500'
        title='Following'
        value={selectedUser.following ? selectedUser.following : 0}
        icon={<FaUserFriends className='text-purple-700 text-4xl' />}
      />
      <UserSocListItem
        className='border-r border-gray-500'
        title='Public repos'
        value={selectedUser.public_repos ? selectedUser.public_repos : 0}
        icon={<IoCubeOutline className='text-purple-700 text-4xl' />}
      />
      <UserSocListItem
        title='Public gists'
        value={selectedUser.public_gists ? selectedUser.public_gists : 0}
        icon={<BsShopWindow className='text-purple-700 text-4xl' />}
      />
    </ul>
  );
};

export default UserSocList;
