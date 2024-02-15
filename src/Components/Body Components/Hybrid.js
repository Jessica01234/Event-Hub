import React from "react";
import { Link } from "react-router-dom";
import HybridImg from '../images/Hybrid.webp';
import './Events.css';

function Hybrid(){
    return(
        <div className="HybridAncestor">
            <section className="HybridFather">
                <h1>Supercharge your hybrid events</h1>
                <p>Hybrid event management software to combine virtual and in-person events into one unified experience so your attendees can get together—wherever they want, however they want.</p>
                <button>
                    <Link to={'/virtual'}>Create Now</Link>
                </button>
            </section>
            <section className="HybridMother">
                <img src={HybridImg} alt=""/>
            </section>
        </div>
    )
}

export default Hybrid;