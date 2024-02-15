import React from "react";
import './Events.css';
import InPerson from '../Assets/inperson-event.webm';
import Virtual from '../Assets/virtual-event.webm';
import Hybrid from '../Assets/hybrid-event.webm';
import { Link } from "react-router-dom";

function Events(){
    return(
        <div className="Ancestor">
            <h1>The simplest way to host all your events</h1>
           <nav className="Father">
           <section className="Mother1">
                <h1>In-person events</h1>
                <p>Keep it all together at the venue</p>
                <button><Link to={'/inPerson'}>Explore More</Link></button>
                <video src={InPerson} autoPlay loop muted/>
            </section>

            <section className="Mother2">
                <h1>Virtual events</h1>
                <p>Go beyond webinars and workshops</p>
                <button><Link to={'/virtual'}>Explore More</Link></button>
                <video src={Virtual} autoPlay loop muted/>
            </section>

            <section className="Mother3">
                <h1>Hybrid events</h1>
                <p>Merge the physical with the virtual</p>
                <button><Link to={'/hybrid'}>Explore More</Link></button>
                <video src={Hybrid} autoPlay loop muted/>
            </section>
           </nav>
        </div>
    )
}

export default Events