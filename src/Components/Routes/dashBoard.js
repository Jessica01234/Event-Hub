import React from "react";
import NavBar from "../NAVBAR/navbar";
import 'animate.css';
import DisplayData from "../Body Components/displayData";
import Footer from "../Footer Components/footer";

function Service(){
    return(
        <>
            <NavBar cName="DBNav"/>
            <DisplayData />
            <Footer />
        </>
    )
}   
export default Service;