import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ButtonLink } from './ButtonLink';

// let navigate = useNavigate(); 
// const routeChange = () =>{ 
//   let path ='/sign-up'; 
//   navigate(path);

function HeroSection() {

 
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>IMWPD</h1>
      <p>Can't make decisions?</p>
      <div className="hero-btns">
       
        <ButtonLink className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large' pathname='/randomizer'> 
          GET STARTED
          
        </ButtonLink>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large' >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;