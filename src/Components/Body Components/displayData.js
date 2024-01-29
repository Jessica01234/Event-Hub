import React from 'react';
import './displayData.css';
import { Link } from 'react-router-dom';

const DisplayData = () => {
  const storedDetails = localStorage.getItem('events');
  const details = JSON.parse(storedDetails);

  return (
    <div className='displayComp'>
      <h1>My Events</h1>
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
        <p>
          <Link to={'/signUp'}>Get Started</Link>
        </p>
      )}
    </div>
  );
};

export default DisplayData;
