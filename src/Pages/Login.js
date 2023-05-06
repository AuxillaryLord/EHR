import React from 'react';
import {Link} from "react-router-dom";
import { FaUserMd, FaUserAlt, FaUserShield } from 'react-icons/fa'; 
function Login() {
  return (
    <div className="login-container">
           <div className="card login-card input-field">
        <h3>Login Form</h3>
        <Link to="/doctor-post">
          <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
            <FaUserMd className="btn-icon" /> Login as Doctor
          </button>
        </Link>
        <br />
        <br />
        <Link to="/patient-post">
          <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
            <FaUserAlt className="btn-icon" /> Login as Patient
          </button>
        </Link>
        <br />
        <br />
        <Link to="/admin">
          <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
            <FaUserShield className="btn-icon" />   Login as Governing Authority
          </button>
        </Link>
        <br />
        <br />
      </div>
        </div>
  )
}

export default Login