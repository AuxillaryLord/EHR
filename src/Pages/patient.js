import React, { useCallback } from 'react';
import "./CreatePost.css";
import {Link} from "react-router-dom";
import {useDropzone} from 'react-dropzone';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
//  import { faFilesMedical } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

import AccessibilityIcon from '@mui/icons-material/Accessibility';
function Patient() {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    // Do something with the accepted files
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='card create-post-container'>
      <h3>Patient Space</h3><br/>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
            <UploadFileIcon className="btn-icon"/>Upload Document
            </button>
        }
      </div>
      <br/>
      
      
      <Link to="/manage-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
        <ManageHistoryIcon className="btn-icon"/>Manage Document</button></Link><br/><br/>
      <Link to="/grant-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
        <AccessibilityIcon className="btn-icon"/>Grant Access</button></Link><br/><br/>
      <Link to="/grant-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">
        <AccessibilityIcon className="btn-icon"/>Revoke Access</button></Link><br/><br/>
    </div>
  )
}

export default Patient;