// import axios from "axios";
import React from "react";


export function Add() {
    return (
        <div>
            <center><h3>Add Doctor</h3></center>
            
            <form className="form">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="fname" id="fname" placeholder="Enter First Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Enter Last Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="number" name="mno" id="mno" placeholder="Enter Country" className="form-control" />
        </div>
        <div className="form-group">
          <label>Public Key</label>
          <input type="text" name="Public_Key" id="public_key" placeholder="Enter Public Key" className="form-control" />
        </div>
        <div className="form-group">
          <label>Hospital Name</label>
          <input type="text" name="Hospital_Name" id="hospital_name" placeholder="Enter Hospital Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Specialization</label>
          <input type="text" name="speci" id="speci" placeholder="Enter Doctor's Specialization" className="form-control" />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <input type="number" name="experi" id="experi" placeholder="Enter Doctor's Experience (in year's)" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Doctor
        </button>
      </form>
                
        </div>
    );
}