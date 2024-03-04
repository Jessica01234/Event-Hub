import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';

function Hero(props){
    return(
     <>
        <nav className={props.cName}>
            <video className='homeVideo animate__animated animate__fadeInLeft' src={props.heroImg} autoPlay loop muted/>
            <div className='hero-text animate__animated animate__fadeInRight'>
                <h1>{props.text2}</h1>
                <h4>{props.text1}</h4>
                <button className='heroButton'>
                   <Link to={'/signUp'}>{props.btn}</Link>
                </button>
            </div>
        </nav>
     </>
    )
}

export default Hero;