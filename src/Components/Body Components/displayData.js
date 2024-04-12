import React from 'react';
import './displayData.css';
import { Link } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import VirtualDisplay from './VirtualDisplay';
import HybridDisplay from './hybridDisplay';
// import { Card, CardBody, CardImg } from 'react-bootstrap';
const DisplayData = () => {
 
  const storedDetails = localStorage.getItem('InPersonEvents');
  const details = JSON.parse(storedDetails);


  
  return (
    <div className='displayComp container-fluid'>
      {details && details.length > 0 ? (
        <>
          <h1 className='H1'>InPerson Events</h1>
          <div style={{background:"#000"}} className='display row'>
            {details.map((event, index) => (
              <section key={index} className='events col-lg-3 col-md-5 col-sm-5 col-10'>
                <img className='image' src={event.eImage} alt='' />
                <div className='displays'>
                  <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                    <h3>{event.eName}</h3>
                    <h5>{event.ePreview}</h5>
                  </div>
                </div>
              </section>
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
              <Link to={'/createEvent'}>
                <button className='Dbtn'>Create Now</button>
              </Link>
             
            </div>
          </div>
         </section>

      )}
    </div>
  );
};

export default DisplayData;
