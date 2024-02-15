import React, { useState, useEffect } from "react";
import './registerForm.css';
import REGISTER from '../images/Rectangle 14.png';

function RegisterEventForm({ eventName, onRegistration, counter }) {
  const handleRegistration = () => {
    onRegistration(eventName);
  };

  return (
   <div className="registerComp">
     <div className="register">
      <h1>{eventName}</h1>
      <p>{counter} person(s) registered for this event</p>
      <button className="reg-btn" onClick={handleRegistration}>Register</button>
    </div>
   </div>
  );
}

function DisplayRegisterForms() {
  const [eventNames, setEventNames] = useState([]);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const events = localStorage.getItem('events');
    const eventsparse = JSON.parse(events) || [];
    let newArr = [];
    eventsparse.forEach((event) => {
      newArr.push(event.eName);
    });
    setEventNames(newArr);

    // Initialize counters array with values from local storage or zeros
    const storedCounters = JSON.parse(localStorage.getItem('counters')) || Array(newArr.length).fill(0);
    setCounters(storedCounters);
  }, []);

  const handleRegistration = (eventName) => {
    alert(`Registration successful for ${eventName}`);

    // Find the index of the event in eventNames array
    const eventIndex = eventNames.indexOf(eventName);

    // Create a copy of the counters array and update the counter at the specified index
    const newCounters = [...counters];
    newCounters[eventIndex] += 1;
    setCounters(newCounters);

    // Save the updated counters array to local storage
    localStorage.setItem('counters', JSON.stringify(newCounters));

    const previousRegistrationsString = localStorage.getItem('eventNames');
    const previousRegistrations = JSON.parse(previousRegistrationsString) || [];
    const updatedRegistrations = [...previousRegistrations, eventName];
    localStorage.setItem('eventNames', JSON.stringify(updatedRegistrations));
    console.log(localStorage.eventNames);
  };

  return (
    <div>
      {eventNames.length > 0 ? (
        eventNames.map((eventName, index) => (
          <RegisterEventForm
            key={index}
            eventName={eventName}
            onRegistration={handleRegistration}
            counter={counters[index]}
          />
        ))
      ) : (
        <div className="father">
          <nav className="mother">
            <h1 className="child1">you Have no events</h1>
            <button className="child2">Create Now</button>
            <img className="child3" src={REGISTER} alt=""/>
          </nav>
        </div>
      )}
    </div>
  );
}

export default DisplayRegisterForms;
