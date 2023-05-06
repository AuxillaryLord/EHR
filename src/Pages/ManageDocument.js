import React from 'react';
import "./CreatePost.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Manage() {

  const handleViewClick = (doc) => {
    window.open(doc.url, '_blank');
  }

  return (
    <div className='card create-post-container'>
      <h4>Document-1</h4>
      <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document1.pdf"})}>
        <VisibilityIcon className='vis'/>View Document</button>
      <button className="btn waves-effect waves-light btn-large #ef5350 red darken-1"><VisibilityOffIcon className='vis'/>Delete Document</button><br/><br/>

      <h4>Document-2</h4>
      <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document2.pdf"})}>
        <VisibilityIcon className='vis'/>View Document</button>
      <button className="btn waves-effect waves-light btn-large #ef5350 red darken-1"><VisibilityOffIcon className='vis'/>Delete Document</button><br/><br/>

      <h4>Document-3</h4>
      <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1" onClick={() => handleViewClick({url: "http://example.com/document3.pdf"})}>
        <VisibilityIcon className='vis'/>View Document</button>
      <button className="btn waves-effect waves-light btn-large #ef5350 red darken-1"><VisibilityOffIcon className='vis'/>Delete Document</button>
    </div>
  )
}

export default Manage;