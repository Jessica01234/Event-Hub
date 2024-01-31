import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

function CreateEventForm() {
  const [eName, setEname] = useState('');
  const [eImage, setEimage] = useState('');
  const [eMonth, setEmonth] = useState('');
  const [eDay, setEday] = useState('');
  const [ePreview, setEpreview] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userDetails = {
      eName: eName,
      eImage: eImage,
      eMonth: eMonth,
      eDay: eDay,
      ePreview: ePreview,
    };
  
    console.log(userDetails);
    // localStorage.clear();

    // Retrieve existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Append the new event to the existing events
    const updatedEvents = [...existingEvents, userDetails];
  
    // Store the updated events in localStorage
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  
    // Navigate to the dashboard with the updated events as a query parameter
    navigate(`/dashboard?events=${encodeURIComponent(updatedEvents)}`);
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
        <h1>CREATE YOUR EVENT</h1>
        <form onSubmit={handleSubmit} className="CEform">
        <label className="CELabel">Event Name</label>
          <input
            id="EnameInput"
            type="text"
            placeholder="Event Name"
            onChange={(e) => {
              setEname(e.target.value);
            }}
          />

          <label className="CELabel">Event Month</label>
          <input
            id="EmonthInput"
            type="text"
            placeholder="MM"
            onChange={(e) => {
              setEmonth(e.target.value);
            }}
          />

          <label className="CELabel">Event Day</label>
          <input
            id="EdayInput"
            type="text"
            placeholder="DD"
            onChange={(e) => {
              setEday(e.target.value);
            }}
          />

          <label className="CELabel">Event Preview</label>
          <input
            id="EpreviewInput"
            type="text"
            placeholder="Event Preview"
            onChange={(e) => {
              setEpreview(e.target.value);
            }}
          />

          <label className="CELabel">Image</label>
          <input
            id="EimageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit" className="CE-Button">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEventForm;
