import React, { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { PersonCircle } from "react-bootstrap-icons";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  signInGoogle,
  signOutFromFirebase,
  auth,
  provider,
} from "../../Firebase/firebaseAuth";

const Header = ({ currentUser, setCurrentUser }) => {
  const [menuOpen, setMenuOpen] = useState('');

  const handleOnClickSignOut = () => {
    signOutFromFirebase(auth).then((res) =>
      res ? setCurrentUser(null) : console.log("Something went wrong!")
    );
  };

  const handleUserImgOnClick = () => {
    menuOpen === 'slide-bottom' ? setMenuOpen('slide-top') : setMenuOpen('slide-bottom');
  };

  return (
    <>
      <header className='d-flex justify-content-between align-items-center p-3 header'>
        <Logo currentUser={currentUser}/>
        <PersonCircle
          size={32}
          className='menu-icon'
          onClick={handleUserImgOnClick}
        />
      </header>
      
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      
    </>
  );
};

export default Header;

// {/* <nav>
//   {/* <Link to='/login'> */}
//   {!currentUser && (
//     <Button onClick={handleOnClickSignIn} variant='outline-primary'>
//       Sign in
//     </Button>
//   )}
//   {/* </Link> */}
//   {currentUser && (
//     <>
//       <p>Hello, {currentUser.name}</p>
//       <Button onClick={handleOnClickSignOut} variant='outline-primary'>
//         Sign out
//       </Button>
//       <Link to='/game'>
//         <Button variant='outline-primary'>Game</Button>
//       </Link>
//       <Link to='/my_questions'>
//         <Button variant='outline-primary'>My questions</Button>
//       </Link>
//       <Link to='/create_new_question'>
//         <Button variant='outline-primary'>Create new question</Button>
//       </Link>
//     </>
//   )}
// </nav>; */}
