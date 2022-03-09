import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";

const UserGHBtn = () => {
  const { selectedUser } = useContext(FinderContext);

  return (
    <a
      href={selectedUser.html_url}
      target='_blank'
      rel='noreferrer'
      className='inline-block rounded-md mt-10 p-2 text-gray-400 hover:text-gray-300 border-2 border-gray-400 hover:border-gray-300'
    >
      VISIT GITHUB PROFILE
    </a>
  );
};

export default UserGHBtn;
