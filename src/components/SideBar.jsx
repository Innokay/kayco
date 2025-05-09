import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-dark border-end vh-100 ${isCollapsed ? 'collapsed' : ''}`} style={{ width: isCollapsed ? '80px' : '250px' }}>
      <button 
        className="btn btn-secondary position-absolute" 
        style={{ top: '10px', left: isCollapsed ? '90px' : '250px' }} 
        onClick={toggleSidebar}
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      
      <h4 className={isCollapsed ? 'd-none' : ''}>KAYS COLLECTION</h4>

      <ul className={`nav flex-column ${isCollapsed ? 'd-none' : ''}`}>
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className='nav-link'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
