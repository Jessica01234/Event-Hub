import React, { useState, useEffect } from "react";
import './registerForm.css';
import REGISTER from '../images/Rectangle 14.png';
import {Link} from 'react-router-dom';

function InPersonRegisterEventForm({ eventName, onRegistration, counter }) {
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
        
        <p>{counter} person(s) registered for this event</p>
        <button className="reg-btn" onClick={handleRegistration}>
          Register
        </button>
      </div>
    </div>
  );
}



function InPersonRegisterForms() {
  const [eventNames, setEventNames] = useState([]);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const events = localStorage.getItem('InPersonEvents');
    const eventsparse = JSON.parse(events) || [];
    let newArr = [];
    eventsparse.forEach((event) => {
      newArr.push(event.eName);
    });
    setEventNames(newArr);

    // Initialize counters array with values from local storage or zeros
    const storedCounters = JSON.parse(localStorage.getItem('InpersonCounters')) || Array(newArr.length).fill(0);
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
    localStorage.setItem('counters', JSON.stringify(newCounters));
  };
  

  return (
    <div className="MainAncestor">
      <h1 className="GrandFatherh1">My InPerson Events</h1>
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
              <InPersonRegisterEventForm
                key={index}
                eventName={eventName}
                onRegistration={handleRegistration}
                counter={counters[index]}
              />
            ))}
          </div>
        </nav>
      ) : (
        <section className="GrandFather">
          {console.log("eventNames in else:", eventNames)}
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
  );
  
}
export default InPersonRegisterForms;