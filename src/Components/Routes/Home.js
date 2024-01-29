import React from "react";
import NavBar from "../NAVBAR/navbar";
import Hero from "../Hero component/Hero";
import HomeImg from "../images/home.png"
import DisplayData from "../Body Components/displayData";
import Footer from "../Footer Components/footer";
import 'animate.css';

function Home(){
    return(
        <>
            <NavBar />
            <Hero 
                cName = "homeHero animate__animated animate__fadeIn"
                heroImg = {HomeImg}
                title = "Welcome"
                text1 = "Start Planning Today!"
                btn = "Get Started"
                />
                <DisplayData />
            <Footer />
        </>

    )
}


export default Home;