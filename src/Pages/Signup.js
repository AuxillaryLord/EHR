import React from 'react';
import {Link} from "react-router-dom";

function Signup() {

    
  return (
    <div className="login-container">
            <div className="card login-card input-field">
                <h3>Patient Signup Form</h3>
                <input
                    type="text"
                    placeholder="Patient ID"
                />
                
                <input
                    type="text"
                    placeholder="Patient Name"
                />
                <input
                    type="text"
                    placeholder="DOB"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">SIGNUP</button>
                <h6>
                    <Link to="/Login">Already have an account ?</Link>
                </h6>
            </div>
        </div>
  )
}


export default Signup