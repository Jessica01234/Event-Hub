import React from "react";
import { Container,Row,Col } from "react-bootstrap";


function Empty(){
    return(
        <div className={Container}>
            <div className={Row}>
                <div className={Col}>
                    <h1>You Have Not Created Any Events</h1>
                </div>
            </div>
        </div>
    )
}

export default Empty;