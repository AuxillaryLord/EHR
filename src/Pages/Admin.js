import React from 'react';
import {Link} from "react-router-dom";

function Admin() {
  const handleViewClick = (doc) => {
    window.open(doc.url, '_blank');
  }
  return (
    <div className="login-container">
            <div className="card login-card input-field">
                <h4>Governing Authority Portal</h4>
                <Link to="/Add-doc"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Add Doctor</button></Link><br/><br/>
                <Link to="/user-list"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Remove Doctor</button></Link><br/><br/>
                
                
            </div>
        </div>
  )
}

export default Admin