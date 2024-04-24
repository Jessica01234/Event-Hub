import React from "react";
import NavBar from "../NAVBAR/navbar";
import 'animate.css';
import InpersonDisplay from "../Body Components/inpersonDisplay";
import Footer from "../Footer Components/footer";

function Service(){
    return(
        <>
            <NavBar cName="DBNav"/>
            <InpersonDisplay />
            <Footer />
        </>
    )
}   
export default Service;