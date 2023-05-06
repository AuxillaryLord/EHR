import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";


const NavBar = () => {
  
  const location = useLocation();
  
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/home" className="brand-logo">
          <b className="brand-text">Smart Health</b>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* <li className="login">
            <Link to="/login">
              <b className="login-text">Login</b>
            </Link>
          </li> */}
          {location.pathname === "/home" && (
          <li className="login">
              <Link to="/login">
          <b className="login-text">Login</b>
         </Link>
         </li>
)}

        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
