import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className='bg-neutral-800 flex justify-between px-24 py-3'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
