import React, { useState } from "react";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopUp}>Open Pop-Up Form</button>
      {isOpen && (
        <div className="pop-up-form">
          <h2>Pop-Up Form</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button type="submit">Submit</button>
          </form>
          <button onClick={togglePopUp}>Close Pop-Up</button>
        </div>
      )}
    </div>
  );
}

export default Popup;
