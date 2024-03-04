import React from "react";
import VirtualImg from '../images/Virtual.png';
import { Link } from "react-router-dom";
import './Events.css';
import NavBar from "../NAVBAR/navbar";

function Virtual(){

    const userDetailsString = localStorage.getItem('email');
    const userDetails = JSON.parse(userDetailsString);

    return(
       <>
       <NavBar />
        <div className="VirtualAncestor">
            <section className="VirtualFather">
                <h1>Create memorable virtual experiences with Event Mgt</h1>
                <p>Where's your next event happening? At home—because that's where it's the safest.</p>
                {/* Rendering share buttons for each event */}
                {renderShareButtons()}
            </section>
            <section className="VirtualMother">
                <img src={VirtualImg} alt=""/>
            </section>
        </div>
       </>
    )

    function renderShareButtons() {
        if (userDetails) {
            // If user is signed in, render button for creating event
            return (
                <button className="CEbtn">
                    <Link to={'/virtualForm'}>Create Your Event</Link>
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

export default Virtual;