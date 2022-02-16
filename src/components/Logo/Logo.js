import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <Link to='/'>
          <div className='logo-ctn'>
            <span className='logo-quiz'>Quiz</span>
            <span className='logo-app'>App</span>
          </div>
        </Link>
      ) : (
        <div className='logo-ctn'>
          <span className='logo-quiz'>Quiz</span>
          <span className='logo-app'>App</span>
        </div>
      )}
    </>
  );
};

export default Logo;

// {currentUser && (
//       <Link to='/'>
//         <div className='logo-ctn'>
//           <span className='logo-quiz'>Quiz</span>
//           <span className='logo-app'>App</span>
//         </div>
//       </Link>
//     );
//   }
