import React from 'react';
import './displayData.css';
import { Link } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import VirtualDisplay from './VirtualDisplay';
import HybridDisplay from './hybridDisplay';
const DisplayData = () => {
 
  const storedDetails = localStorage.getItem('InPersonEvents');
  const details = JSON.parse(storedDetails);

  return (
    <div className='displayComp'>
      {details && details.length > 0 ? (
        <>
          <h1 className='H1'>InPerson Events</h1>
          <div className='display'>
            {details.map((event, index) => (
              <div key={index} className='events'>
                <img className='image' src={event.eImage} alt='' />
                <div className='displays'>
                  <div>
                    <h3>{event.eDay}</h3>
                    <h3>{event.eLocation}</h3>
                  </div>
                  <div>
                    <h2>{event.eName}</h2>
                    <h4>{event.ePreview}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <VirtualDisplay />
          <HybridDisplay />
        </> 
      ) : (
         <section>
            <nav className='h1Container'>
              <h1>My Events</h1>
            </nav>

           <div className='CEDiv'>
            <div className='imageContainer'>
              <img className='CEImage' src={CEImage} alt=''/>
            </div>
            <div className='CEText'>
              <h1>Create Your Event(s)</h1>
              <p>You don't have any upcoming event(s)</p>
              <Link to={'/signUp'}>
                <button className='btn'>Create Now</button>
              </Link>
             
            </div>
          </div>
         </section>

      )}
    </div>
  );
};

export default DisplayData;
