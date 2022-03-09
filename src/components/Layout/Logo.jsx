import React from "react";
import { BsGithub } from "react-icons/bs";

const Logo = () => {
  return (
    <div className='flex flex-row items-center text-white'>
      <BsGithub className='mr-2' />
      <h1>Github Finder</h1>
    </div>
  );
};

export default Logo;
