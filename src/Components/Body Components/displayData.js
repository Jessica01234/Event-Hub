import React, { useState } from 'react';
import './displayData.css';
import { Link } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import RegisterEventForm from './registerForm';
const DisplayData = () => {
  const [Counter, setCounter] = useState(0);

  const HandleIncreament = () =>{
    setCounter(Counter+1);
  }
  const storedDetails = localStorage.getItem('events');
  const details = JSON.parse(storedDetails);

  return (
    <div className='displayComp'>
        <h1>UpComing Events</h1>
      {details && details.length > 0 ? (
        
        <div className='display'>
          {details.map((event, index) => (
            <div key={index} className='events'>
              <img className='image' src={event.eImage} alt='' />
              <div className='displays'>
                <div>
                  <h1 style={{ marginTop: '-1rem' }}>{event.eDay}</h1>
                </div>
                <div>
                  <h3>{event.eName}</h3>
                  <h4>{event.ePreview}</h4>
                </div>
                {/* <nav>
                  <p>{Counter}</p>
                  <button onClick={HandleIncreament}>Register</button>
                </nav> */}
              </div>
              <RegisterEventForm />
            </div>
          ))}
        </div>
      ) : (
          <div className='Card CEDiv'>
            <div className='Card'>
              <img className='Card-Image CEImage' src={CEImage} alt=''/>
            </div>
            <div className='CEText'>
              <h1 className=''>Create Your Event(s)</h1>
              <h3>You don't have any upcoming event(s)</h3>
              <Link to={'/signUp'}>
                <button className='btn'>Create Now</button>
              </Link>
             
            </div>
          </div>

      )}
    </div>
  );
};

export default DisplayData;
