import './Hero.css';
import { Link } from 'react-router-dom';

function Hero(props){
    return(
     <>
        <nav className={props.cName}>
            <img src={props.heroImg} alt=''/>
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <h3>{props.text1}</h3>
            </div>
        </nav>
     </>
    )
}

export default Hero;