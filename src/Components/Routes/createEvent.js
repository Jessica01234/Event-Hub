import React from "react";
import NavBar from "../NAVBAR/navbar";
import Events from "../Body Components/Events";
import Footer from "../Footer Components/footer";

function CreateEvent(){
    return(
      <>
           <NavBar cName="CENav"/>
           <Events />
           <Footer />
      </>
    )
}
export default CreateEvent;