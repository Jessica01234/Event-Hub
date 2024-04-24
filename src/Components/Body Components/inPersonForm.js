import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./inPersonForm.css";

function InPersonForm() {
  const [eName, setEname] = useState('');
  const [eImage, setEimage] = useState('');
  const [eDay, setEday] = useState('');
  const [ePreview, setEpreview] = useState(''); 
  const [eLocation, setElocation] = useState('');
  const [eventId, setEventId] = useState('');

  const navigate = useNavigate();


  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const updateEventsInLocalStorage = (newEvent) => {
    // Retrieve existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('InPersonEvents')) || [];
  
    // Append the new event to the existing events
    const updatedEvents = [...existingEvents, newEvent];
  
    // Store the updated events in localStorage
    localStorage.setItem('InPersonEvents', JSON.stringify(updatedEvents));
    // localStorage.clear();
    console.log(localStorage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const userDetails = {
      id: eventId,
      eName: eName,
      eImage: eImage,
      eDay: eDay,
      ePreview: ePreview,
      eLocation: eLocation
    };
    console.log(userDetails);

    updateEventsInLocalStorage(userDetails);
  
    // Navigate to the dashboard with the updated events as a query parameter
    navigate(`/dashboard`);
  };
  
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setEimage(dataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

    // Generate unique ID when component mounts
    useEffect(() => {
      const id = generateUniqueId();
      setEventId(id);
    }, []);

  return (
    <>
      <div className="CE">
        <form onSubmit={handleSubmit} className="CEform">
        <h1>CREATE YOUR EVENT</h1>
        <label className="CELabel">Event Name</label>
          <input
          required
            id="EnameInput"
            type="text"
            placeholder="Event Name"
            onChange={(e) => {
              setEname(e.target.value);
            }}
          />

          <label className="CELabel">Event Day</label>
          <input
          required
            id="EdayInput"
            type="date"
            placeholder="DD"
            onChange={(e) => {
              setEday(e.target.value);
            }}
          />

          <label className="CELabel">Event Preview</label>
          <input
          required
            id="EpreviewInput"
            type="text"
            placeholder="Event Preview"
            onChange={(e) => {
              setEpreview(e.target.value);
            }}
          />

          <label className="CELabel">Event Location</label>
          <input
          required
            id="ElocationInput"
            type="text"
            placeholder="Event Location"
            onChange={(e) => {
              setElocation(e.target.value);
            }}
          />

          <label className="CELabel">Event Image</label>
          <input
          required
            id="EimageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
            <button type="submit" className="CE-Button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default InPersonForm;
