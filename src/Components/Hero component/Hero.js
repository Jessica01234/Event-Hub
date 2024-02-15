import React from 'react';
import { Link } from "react-router-dom";
import './Hero.css';

function Hero(props){
    return(
     <>
        <nav className={props.cName}>
            <img src={props.heroImg} alt=''/>
            <div className='hero-text'>
                <h1>{props.text2}</h1>
                <h4>{props.text1}</h4>
                <button>
                   <Link to={'/signUp'}>{props.btn}</Link>
                </button>
            </div>
        </nav>
     </>
    )
}

export default Hero;