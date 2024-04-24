import React from "react";
import "./Guests.css";
import { Table,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function InpersonGuests() {
    const GuestsString = localStorage.getItem("InpersonGuests");
    const GuestsDetails = JSON.parse(GuestsString) || [];

    const EventsString = localStorage.getItem("InPersonEvents");
    const EventsDetails = JSON.parse(EventsString) || [];

    const getEventName = (eventId) => {
        const event = EventsDetails.find(event => event.id === eventId);
        return event ? event.eName : "Unknown Event";
    };

    return (
        <div>
            {GuestsDetails && GuestsDetails.length > 0 ? (
                <nav>
                    <aside className="aside">
                        <h1>
                            <Link to={'/inpersonGuests'}  className={`${window.location.pathname === '/inpersonGuests' ? 'active' : ''}`}>INPERSON</Link>
                        </h1>
                        <h1>
                            <Link to={'/virtualGuests'}>VIRTUAL</Link>
                        </h1>
                        <h1>
                            <Link to={'/hybridGuests'} className={`${window.location.pathname === '/hybridGuests' ? 'active' : ''}`}>HYBRID</Link>
                        </h1>
                    </aside>

                   <div className="TableComponent">
                        <h1>Inperson Event Guest</h1>
                        <div className="table-responsive col-lg-10">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {GuestsDetails.map((guest, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{guest.name}</td>
                                                <td>{guest.email}</td>
                                                <td>{getEventName(guest.eventId)}</td> 
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <div className="homeBtn">
                                    <Button href="/dashboard" className="btn-danger col-lg-2">DashBoard</Button>
                                </div>
                        </div>
                   </div>
                </nav>
            ) : (
                <section>
                    <p>No Guests</p>
                </section>
            )}
        </div>
    );
}

export default InpersonGuests;
