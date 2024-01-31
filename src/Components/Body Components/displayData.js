import React from 'react';
import './displayData.css';
import { Link } from 'react-router-dom';
import CEImage from '../images/image 3.png';

const DisplayData = () => {
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
                  <h4>{event.eMonth}</h4>
                  <h1 style={{ marginTop: '-1rem' }}>{event.eDay}</h1>
                </div>
                <div>
                  <h3>{event.eName}</h3>
                  <h4>{event.ePreview}</h4>
                </div>
              </div>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, atque!</p>
              <Link to={'/signUp'}>
                <button className='btn'>Create Your Event</button>
              </Link>
             
            </div>
          </div>

      )}
    </div>
  );
};

export default DisplayData;