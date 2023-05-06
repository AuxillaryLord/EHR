// import axios from "axios";
import React from "react";


export function Request() {
    return (
        <div>
            <center><h3>Request Document</h3></center>
            
            <form className="form">
        <div className="form-group">
          <label>Document Required</label>
          <input type="text" name="fname" id="fname" placeholder="Enter Document Required" className="form-control" />
        </div>
        <div className="form-group">
          <label>Test Name</label>
          <input type="text" name="lname" id="lname" placeholder="Enter Test Name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Submission deadline</label>
          <input type="date" name="email" id="email" placeholder="Enter the Deadline to submit the requested document" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
        Request Document
        </button>
      </form>
                
        </div>
    );
}