import React from "react";
import { Link } from "react-router-dom";
import HybridImg from '../images/Hybrid.webp';
import './Events.css';
import NavBar from "../NAVBAR/navbar";

function Hybrid(){

    const userDetailsString = localStorage.getItem('email');
    const userDetails = JSON.parse(userDetailsString);

    return(
      <div>
          <NavBar />
        <div className="HybridAncestor">
            <section className="HybridFather">
                <h1>Supercharge your hybrid events</h1>
                <p>Hybrid event management software to combine virtual and in-person events into one unified experience so your attendees can get together—wherever they want, however they want.</p>
                {/* Rendering share buttons for each event */}
                {renderShareButtons()}
            </section>
            <section className="HybridMother">
                <img src={HybridImg} alt=""/>
            </section>
        </div>
      </div>
    )

    function renderShareButtons() {
        if (userDetails) {
            // If user is signed in, render button for creating event
            return (
                <button className="CEbtn">
                    <Link to={'/hybridForm'}>Create Now</Link>
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

export default Hybrid;