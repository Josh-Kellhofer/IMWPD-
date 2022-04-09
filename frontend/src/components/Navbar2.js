import React, { useState } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'

function Navbar2() {
  const [click, setClick] = useState(false) //sets the menu-icon to false (The icon itself)

  const handleClick = () => setClick(!click) //turns the menu-icon to an X

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        <div className ='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
        </div>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar2;