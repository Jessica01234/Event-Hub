import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

function CreateEventForm() {
  const [eName, setEname] = useState('');
  const [eImage, setEimage] = useState('');
  const [eDay, setEday] = useState('');
  const [ePreview, setEpreview] = useState('');
  const [Register, setRegister] = useState(null); 

  const navigate = useNavigate();


  const updateEventsInLocalStorage = (newEvent) => {
    // Retrieve existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Append the new event to the existing events
    const updatedEvents = [...existingEvents, newEvent];
  
    // Store the updated events in localStorage
    localStorage.setItem('events', JSON.stringify(updatedEvents));
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
    };
      let Register =0;




    setRegister(Register++);
    updateEventsInLocalStorage(userDetails);
  
    // Navigate to the dashboard with the updated events as a query parameter
    navigate(`/dashboard?events=${encodeURIComponent(localStorage.getItem('events'))}`);
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

          <label className="CELabel">Image</label>
          <input
          required
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
