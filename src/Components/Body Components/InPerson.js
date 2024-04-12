import React from "react";
import InPersonImg from '../images/InPerson.webp';
import { Link } from "react-router-dom";
import './Events.css';
import Navbar from '../NAVBAR/navbar';
function InPerson(){

    const userDetailsString = localStorage.getItem('user');
    const userDetails = JSON.parse(userDetailsString);

    return(
        <>
        <Navbar />
            <div className="InpersonAncestor">
                <section className="InPersonFather">
                    <h1>Easy to create with better event experience</h1>
                    <p>Get your attendees through the line and in the door faster</p>
                    <p>with our powerful, easy-to-use, and contactless check-in</p>
                     {/* Rendering share buttons for each event */}
                    {renderShareButtons()}
                </section>
                <section className="InPersonMother">
                    <img src={InPersonImg} alt=""/>
                </section>
            </div>
        </>
    )

    function renderShareButtons() {
        if (userDetails) {
            // If user is signed in, render button for creating event
            return (
                <button className="CEbtn">
                    <Link to={'/inPersonForm'}>Create Now</Link>
                </button>
            );
            } else {
            // If user is not signed in, render button for signing up
            return (
                <button className="SEbtn">
                    <Link to={'/signup'}>SignUp For Free</Link>
                </button>
            );
        }
    }

}

export default InPerson;