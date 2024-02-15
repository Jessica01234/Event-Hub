import React from "react";
import VirtualImg from '../images/Virtual.png';
import { Link } from "react-router-dom";
import './Events.css';
import EventShareButton from "./virtualForm";

function Virtual(){
    return(
       <>
        <div className="VirtualAncestor">
            <section className="VirtualFather">
                <h1>Create memorable virtual experiences with Event Mgt</h1>
                <p>Where's your next event happening? At home—because that's where it's the safest.</p>
                <button>
                    <Link to={'/virtual'}>Create Now</Link>
                </button>
            </section>
            <section className="VirtualMother">
                <img src={VirtualImg} alt=""/>
            </section>
        </div>
        <EventShareButton />
       </>
    )
}

export default Virtual;