import React, { useState } from "react";
import NavBar from "../NAVBAR/navbar";
import 'animate.css';
import DisplayData from "../Body Components/displayData";
import Footer from "../Footer Components/footer";
import Empty from "../Body Components/empty";

function Service(){
    const [Display, setDisplay] = useState(false);
    setDisplay(true);
    return(
        <>
            <NavBar />
            {
                Display ? <Empty /> : <DisplayData />
            }
            // <DisplayData />
            // <Footer />
        </>
    )
}   
export default Service;