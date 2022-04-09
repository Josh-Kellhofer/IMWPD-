import React, { useState, UseEffect, useEffect } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'

function Navbar2() {
  const [click, setClick] = useState(false) //sets the menu-icon to false (The icon itself)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click) //turns the menu-icon to an X
  const closeMobileMenu = () => setClick(false);

  //Turns the NavBar Menu into a single icon if Window is shrunk down
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton); //listener to turn NavBar Menu into a single icon if Window is shrunk down

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
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
        <div className='menu-icon' onClick={handleClick}>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar2;