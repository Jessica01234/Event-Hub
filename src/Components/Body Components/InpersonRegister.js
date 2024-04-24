// InPersonRegisterForms.js
import React from "react";
import './registerComp.css';
import REGISTER from '../images/Rectangle 14.png';
import { Link } from 'react-router-dom';

function InPersonRegister() {
    const events = JSON.parse(localStorage.getItem('InPersonEvents')) || [];

    return (
        <div className="MainAncestor">
            {events.length > 0 ? (
                <nav className="ancestor">
                    <aside className="aside">
                        <h1>
                            <Link to={'/register'} className={`${window.location.pathname === '/register' ? 'active' : ''}`}>INPERSON</Link>
                        </h1>
                        <h1>
                            <Link to={'/virtualRegister'} className={`${window.location.pathname === '/virtualRegister' ? 'active' : ''}`}>VIRTUAL</Link>
                        </h1>
                        <h1>
                            <Link to={'/hybridRegister'} className={`${window.location.pathname === '/hybridRegister' ? 'active' : ''}`}>HYBRID</Link>
                        </h1>
                    </aside>

                    <div>
                        <h1 className="GrandFatherh1">My InPerson Events</h1>
                        <div className="reg">
                            {events.map((event, index) => (
                                <div key={index} className="registerComp">
                                    <div className="register">
                                        <h1>Register For {event.eName}</h1>
                                        <img src={event.eImage} alt=""/>
                                        <section style={{display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid #ccc", padding: "20px", margin: "10px"}}>
                                            <h4>Happening On {event.eDay}</h4>
                                            <h4>At {event.eLocation}</h4>
                                        </section>
                                        <Link to={`/InpersonEventForm/${event.id}`} className="reg-btn"> 
                                            Register Now
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            ) : (
                <section className="GrandFather">
                    <aside className="aside">
                        <h1>
                            <Link to={'/register'} className={`${window.location.pathname === '/register' ? 'active' : ''}`}>INPERSON</Link>
                        </h1>
                        <h1>
                            <Link to={'/virtualRegister'}>VIRTUAL</Link>
                        </h1>
                        <h1>
                            <Link to={'/hybridRegister'}>HYBRID</Link>
                        </h1>
                    </aside>
                    <div className="father">
                        <div className="ImageContainer animate__animated animate__fadeInUp">
                            <img className="child1" src={REGISTER} alt=""/>
                        </div>
                        <nav className="mother animate__animated animate__fadeInDown">
                            <h1 className="child2">Your Event(s)</h1>
                            <p className="child3">You don't have any event to Register</p>
                            <button className="child4">
                                <Link to={'/createEvent'}>Create Now</Link>
                            </button>
                        </nav>
                    </div>
                </section>
            )}
        </div>
    );
}

export default InPersonRegister;
