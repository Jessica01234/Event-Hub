import React from "react";
import LandingPageNavbar from "../NAVBAR/homeNavbar";
import Hero from "../Hero component/Hero";
import HomeVideo from '../Assets/banner-intro.webm';


function Home(){
    return(
        <>
            <LandingPageNavbar />
            <Hero 
                cName = "homeHero animate__animated animate__fadeIn"
                heroImg = {HomeVideo}
                text1 = "ALL-IN-ONE EVENT MANAGEMENT WEB APPLICATION"
                text2 = "Start Planning Today!"
                />
        </>

    )
}


export default Home;