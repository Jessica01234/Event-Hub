import React from "react";
import InPersonImg from '../images/InPerson.webp';
import { Link } from "react-router-dom";
import './Events.css';
function InPerson(){
    return(
        <>
            <div className="InpersonAncestor">
                <section className="InPersonFather">
                    <h1>Easy to create with better event experience</h1>
                    <p>Get your attendees through the line and in the door faster</p>
                    <p>with our powerful, easy-to-use, and contactless check-in</p>
                    <button>
                        <Link to={'/inPersonForm'}>Create Now</Link>
                    </button>
                </section>
                <section className="InPersonMother">
                    <img src={InPersonImg} alt=""/>
                </section>
            </div>
        </>
    )
}

export default InPerson;