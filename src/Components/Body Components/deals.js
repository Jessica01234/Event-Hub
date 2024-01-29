import React from "react";
import './deals.css';
import PopularMovie from "./popular";
import UpComingMovie from "./upComing";

function Deals (){
    return(
        <>
           <div className="deals">
            <PopularMovie />
            <UpComingMovie />
            </div> 
        </>
    )
}
export default Deals;