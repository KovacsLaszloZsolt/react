import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  // const [openClass, setOpenClass] = useState('')
  const handleNavItemOnClick = () => {
    setMenuOpen('slide-top');
  };
  const handleOnClickLogOut = () => {
    handleNavItemOnClick();
  };
  return (
    <nav className={`nav-bar ${menuOpen}`}>
      <ul className='p-2'>
        <li className='nav-item' onClick={handleNavItemOnClick}>
          <Link to='/'>Main</Link>
        </li>
        <li className='nav-item' onClick={handleNavItemOnClick}>
          <Link to='/my_questions'>My questions</Link>
        </li>
        <li className='nav-item' onClick={handleOnClickLogOut}>
          <Link to='/login'>Logout</Link>
        </li>
        <li className='nav-item'></li>
      </ul>
    </nav>
  );
};

export default Navbar;
