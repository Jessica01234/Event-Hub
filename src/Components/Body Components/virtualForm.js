import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./createEventForm.css";

function CreateEventForm() {
  const [eName, setEname] = useState('');
  const [eImage, setEimage] = useState('');
  const [eDay, setEday] = useState('');
  const [ePreview, setEpreview] = useState(''); 
  const [eLocation, setElocation] = useState(''); 

  const navigate = useNavigate();


  const updateEventsInLocalStorage = (newEvent) => {
    // Retrieve existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('VirtualEvents')) || [];
  
    // Append the new event to the existing events
    const updatedEvents = [...existingEvents, newEvent];
  
    // Store the updated events in localStorage
    localStorage.setItem('VirtualEvents', JSON.stringify(updatedEvents));
    // localStorage.clear();
    console.log(localStorage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const userDetails = {
      eName: eName,
      eImage: eImage,
      eDay: eDay,
      ePreview: ePreview,
      eLocation: eLocation
    };

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

            <label htmlFor="location">Location</label>
            <select id="location" required onChange={(e) => {
                    setElocation(e.target.value);
                    }}>
                <option value="">Select</option>
                <option>WhatsApp</option>
                <option>Telegram</option>
                <option>Facebook</option>
            </select>

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

export default CreateEventForm;
