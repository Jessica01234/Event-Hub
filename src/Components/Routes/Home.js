import React from "react";
// import NavBar from "../NAVBAR/navbar";
import LandingPageNavbar from "../NAVBAR/homeNavbar";
import Hero from "../Hero component/Hero";
import HomeVideo from '../Assets/banner-intro.webm';
// import Events from "../Body Components/Events";
// import Footer from "../Footer Components/footer";
import 'animate.css';

function Home(){
    return(
        <>
            {/* <NavBar /> */}
            <LandingPageNavbar />
            <Hero 
                cName = "homeHero animate__animated animate__fadeIn"
                heroImg = {HomeVideo}
                text1 = "ALL-IN-ONE EVENT MANAGEMENT WEB APPLICATION"
                text2 = "Start Planning Today!"
                btn = "SIGN UP FOR FREE"
                />
                {/* <Events /> */}
                {/* <Footer /> */}
        </>

    )
}


export default Home;