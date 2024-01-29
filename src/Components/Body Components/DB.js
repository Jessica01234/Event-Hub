
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  // const [username, setUsername] = useState('');
  // const [EName, setEName] = useState('');
  const [Event, setEvent] = useState([{Ename:'',Etype:''}]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // localStorage.setItem('username',username);
    // localStorage.setItem('Ename',EName);
    const stringEvent = JSON.stringify(Event); 
    localStorage.setItem('Ename',stringEvent);
    console.log(localStorage);

    // Navigate to the DisplayData page with query parameters
    navigate(`/dashboard?Ename=${encodeURIComponent(stringEvent)}`);
  };

  const handleUsernameChange = (event) => {
    setEvent(event.target.value);
  };

  const getUserDetails = () =>{
    
  }

  // const handleENameChange = (event) => {
  //   setEName(event.target.value);
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Ename">Ename:</label>
        <input
          type="text"
          id="Ename"
          name="Ename"
          // value={username}
          // value={Ename}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <label htmlFor="Etype">Event Type:</label>
        <input
          type="text"
          id="Etype"
          name="Etype"
          // value={EName}
          // value={Etype}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <button onClick={getUserDetails} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
