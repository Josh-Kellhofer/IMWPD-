import React, { useState } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'

function Navbar2() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          TRVL <i className="fab fa-typo3"></i>
        </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar2;