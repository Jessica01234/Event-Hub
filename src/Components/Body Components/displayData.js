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
                  <h3 style={{ marginTop: '3rem' }}>{event.eDay}</h3>
                </div>
                <div>
                  <h2>{event.eName}</h2>
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
