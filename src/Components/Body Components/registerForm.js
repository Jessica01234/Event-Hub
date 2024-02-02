import React, { useState, useEffect } from "react";

function RegisterEventForm() {
  const [eventNames, setEventNames] = useState([]);
  const [Counter, setCounter] = useState(0);
  useEffect(() => {

    const events = localStorage.getItem('events');
    const eventsparse = JSON.parse(events);
    let newArr = [];
    eventsparse.map((event)=>{
        newArr.push(event.eName)
    })
    console.log(newArr);
    setEventNames(newArr);
  }, []);
  const HandleIncreament = () =>{
    setCounter(Counter+1);
  }

  const handleRegistration = () => {
    // Ensure that the user has selected an event to register for
    if (!eventNames) {
      alert("Please select an event to register for.");
      return;
    }else{
        alert("Registration successful");
    }
  HandleIncreament(Counter);
    // Assuming you want to store the registration data in localStorage
    const previousRegistrationsString = localStorage.getItem('eventNames');
    const previousRegistrations = JSON.parse(previousRegistrationsString) || [];
    // Add the new registration to the array
    const updatedRegistrations = [...previousRegistrations, eventNames];
    // Save the updated registrations back to localStorage
    localStorage.setItem('eventNames', JSON.stringify(updatedRegistrations));
    console.log(localStorage.eventNames);
  };
  

  return (
    <div>
      <div>
        <label className="CELabel">Register</label>
        <select>
          {eventNames.map((eventName, index) => (
            <option key={index}>{eventName}</option>
          ))}
        </select>
        <p>{Counter}</p>
        <button onClick={handleRegistration}>Register</button>
      </div>
    </div>
  );
}

export default RegisterEventForm;
