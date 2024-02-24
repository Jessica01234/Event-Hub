import React, { useState, useEffect } from "react";
import './registerForm.css';
import REGISTER from '../images/Rectangle 14.png';
import {Link} from 'react-router-dom';
import NavBar from "../NAVBAR/navbar";
import { WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

// Function to render share buttons for each event
function renderShareButtons(eventName, events) {
  if (!events) return null;

  const location = events.VirtualLocation;
  const decodedLink = decodeURIComponent('https://event-mgt.vercel.app');
  const shareMessage = `Check out my upcoming ${eventName} event on ${events.eDay} at ${events.eLocation}. It's about: ${events.ePreview}. Link: ${decodedLink}`;

  if (location === 'WhatsApp') {
    return (
      <WhatsappShareButton
        url={`whatsapp://send?text=${decodeURIComponent(shareMessage)}`}
        title={eventName}
        separator=" - "
      >
        <button className='shareBtn'>Share Now</button>
      </WhatsappShareButton>
    );
  } else if (location === 'Telegram') {
    return (
      <TelegramShareButton
      url={`telegram://send?text==${decodeURIComponent(shareMessage)}`}
      title={eventName}
      separator=" - "
      >
        <button className='shareBtn'>Share Now</button>
      </TelegramShareButton>
    );
  } else if (location === 'Facebook') {
    return (
      <FacebookShareButton
        url={`facebook://send?text=${decodeURIComponent(shareMessage)}`}
        title={eventName}
        separator=" - "
      >
        <button className='shareBtn'>Share Now</button>
      </FacebookShareButton>
    );
  }
  // You can add more conditions or handle other cases here
  return null;
}

function HybridRegisterEventForm({ eventName, onRegistration, counter, eventDetails }) {
  const [numberOfAttendees, setNumberOfAttendees] = useState();

  const handleRegistration = () => {
    // Check if the entered value is a valid number
    if (!isNaN(numberOfAttendees) && numberOfAttendees > 0) {
      onRegistration(eventName, numberOfAttendees);
      setNumberOfAttendees();
    } else {
      alert("Please enter a valid number of attendees.");
    }
  };

  return (
    <div className="registerComp">
      <div className="register">
        <h1>{eventName}</h1>
        <label>Register Your Guest(s)</label>
        <input
          type="number"
          value={numberOfAttendees}
          onChange={(e) => setNumberOfAttendees(parseInt(e.target.value))}
          required
          placeholder="No. Of Attendee "
        />
        <p>{counter} person(s) are registered</p>
        <button className="reg-btn" onClick={handleRegistration}>
          Register
        </button>
        <nav className="shareBtnNav">
          <div id="shareBtnP">Share Your event</div>
          <div id="shareBtnP">on the Virtual Location</div>
          {/* Rendering share buttons for each event */}
          {renderShareButtons(eventName, eventDetails)}
        </nav>
      </div>
    </div>
  );
}

function HybridRegisterForms() {
  const [eventNames, setEventNames] = useState([]);
  const [counters, setCounters] = useState([]);
  const [eventsparse, setEventsparse] = useState([]);

  useEffect(() => {
    const Events = localStorage.getItem('HybridEvents');
    const eventsparse = JSON.parse(Events) || [];
    setEventsparse(eventsparse);
    let newArr = [];
    eventsparse.forEach((event) => {
      newArr.push(event.eName);
    });
    setEventNames(newArr);

    // Initialize counters array with values from local storage or zeros
    const storedCounters = JSON.parse(localStorage.getItem('HybridCounters')) || Array(newArr.length).fill(0);
    setCounters(storedCounters);
    
  }, []);

  const handleRegistration = (eventName, numberOfAttendees) => {
    alert(`Registration successful for ${eventName}`);
  
    // Find the index of the event in eventNames array
    const eventIndex = eventNames.indexOf(eventName);
  
    // Create a copy of the counters array and update the counter at the specified index
    const newCounters = [...counters];
    newCounters[eventIndex] += numberOfAttendees; // Increment by the entered number
    setCounters(newCounters);
  
    // Save the updated counters array to local storage
    localStorage.setItem('HybridCounters', JSON.stringify(newCounters));
  };
  

  return (
    <>
        <NavBar cName="HRNav"/>
        <div className="MainAncestor">
        <h1 className="GrandFatherh1">My Hybrid Events</h1>
        {eventNames.length > 0 ? (
        <nav className="ancestor">
            <aside className="aside">
            <h1>
            <Link to={'/register'}>INPERSON</Link>
            </h1>
            <h1>
            <Link to={'/virtualRegister'}>VIRTUAL</Link>
            </h1>
            <h1>
            <Link to={'/hybridRegister'}>HYBRID</Link>
            </h1>
            </aside>
            
            <div className="reg">
            {eventNames.map((eventName, index) => (
                <HybridRegisterEventForm
                    key={index}
                    eventName={eventName}
                    onRegistration={handleRegistration}
                    counter={counters[index]}
                  eventDetails={eventsparse[index]}
                />
                ))}
            </div>
        </nav>
        
        ) : (
        <section className="GrandFather">
            <div className="father">
            <div className="ImageContainer">
                <img className="child1" src={REGISTER} alt=""/>
            </div>
            <nav className="mother">
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
    </>
  );
}
export default HybridRegisterForms;