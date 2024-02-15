import React from "react";
import NavBar from "../NAVBAR/navbar";
import Hero from "../Hero component/Hero";
import HomeImg from "../images/home.png"
// import DisplayData from "../Body Components/displayData";
import Events from "../Body Components/Events";
import Footer from "../Footer Components/footer";
import 'animate.css';

function Home(){
    return(
        <>
            <NavBar />
            <Hero 
                cName = "homeHero animate__animated animate__fadeIn"
                heroImg = {HomeImg}
                text1 = "ALL-IN-ONE EVENT MANAGEMENT SOFTWARE"
                text2 = "Start Planning Today!"
                btn = "SIGN UP FOR FREE"
                />
                {/* <DisplayData /> */}
                <Events />
            <Footer />
        </>

    )
}


export default Home;