import React, { useState } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'

function Navbar2() {
  const [click, setClick] = useState(false) //sets the menu-icon to false (The icon itself)

  const handleClick = () => setClick(!click) //turns the menu-icon to an X
  const closeMobileMenu = () => setClick(false);

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
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar2;