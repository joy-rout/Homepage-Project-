import React, { useState } from "react";
import './MoodTracker.css'

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-section">
      <button className="dropdown-button" onClick={handleClick}>
        {title}
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
