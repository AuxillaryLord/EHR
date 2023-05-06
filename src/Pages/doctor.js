import React,{ useState } from 'react';
import "./CreatePost.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom";
function Doctor() {
   
    const handleViewClick = (doc) => {
      window.open(doc.url, '_blank');
    }
  return (
  <>
<div className='card create-post-container123'>
    <h4>Patient X</h4>
    <button className="btn1 btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document-x.pdf"})}>
      <VisibilityIcon className='vis'/>View Document</button><br/>
    <Link to="/Req-doc"><button className="btn1 btn waves-effect waves-light btn-large #64b5f6 green darken-1">
      <VisibilityIcon className='vis'/>Request Document</button></Link><br/>
  
</div>
<div className='card create-post-container123'>
    <h4>Patient Y</h4>
    <button className="btn1 btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document-x.pdf"})}>
      <VisibilityIcon className='vis'/>View Document</button><br/>
    <Link to="/Req-doc"><button className="btn1 btn waves-effect waves-light btn-large #64b5f6 green darken-1">
      <VisibilityIcon className='vis'/>Request Document</button></Link><br/>
  
</div>
<div className='card create-post-container123'>
    <h4>Patient Z</h4>
    <button className="btn1 btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document-x.pdf"})}>
      <VisibilityIcon className='vis'/>View Document</button><br/>
    <Link to="/Req-doc"><button className="btn1 btn waves-effect waves-light btn-large #64b5f6 green darken-1">
      <VisibilityIcon className='vis'/>Request Document</button></Link><br/>
  
</div>
</>

  )
}

export default Doctor;
