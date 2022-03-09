import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='text-white'>
      <ul className='flex'>
        <li className='mr-4'>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
