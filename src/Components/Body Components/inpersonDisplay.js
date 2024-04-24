import React, { useState } from 'react';
import './displayData.css';
import { Link, useNavigate } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import ThreeDot from "../images/dot.png";


const InpersonDisplay = () => {
  const [deleteTextVisible, setDeleteTextVisible] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
 
  const [InpersonEvents, setInpersonEvents] = useState(() => {
    const InpersonEventsString = localStorage.getItem('InPersonEvents');
    return InpersonEventsString ? JSON.parse(InpersonEventsString) : [];
  });

  const nav = useNavigate();

    const handleRemove = (eventId) => {
      const updatedHybridEvents = InpersonEvents.filter(event => event.id !== eventId);
      localStorage.setItem('InPersonEvents', JSON.stringify(updatedHybridEvents));
      setInpersonEvents(updatedHybridEvents);
      setDeleteTextVisible(false);
      setSelectedEventId(null);
    };
    const toggleDeleteText = (eventId) => {
      if (selectedEventId === eventId) {
        setDeleteTextVisible(false);
        setSelectedEventId(null);
        alert('are you sure')
      } else {
        setDeleteTextVisible(true);
        setSelectedEventId(eventId);
      }
    };

    const toggleRegister = (eventId) => {
      if (selectedEventId === eventId) {
        setDeleteTextVisible(false);
        setSelectedEventId(null);
        nav(`/register`); // Assuming the route includes the eventId
      } else {
        setDeleteTextVisible(true);
        setSelectedEventId(eventId);
      }
    };
  return (
    <div className='displayComp'>
      {InpersonEvents && InpersonEvents.length > 0 ? (
        <nav className="ancestor">
          <aside className="aside">
              <h1>
                <Link to={'/dashboard'} className={`${window.location.pathname === '/dashboard' ? 'active' : ''}`}>INPERSON</Link>
              </h1>
              <h1>
                <Link to={'/virtualDisplay'}className={`${window.location.pathname === '/virtualDisplay' ? 'active' : ''}`}>VIRTUAL</Link>
              </h1>
              <h1>
                <Link to={'/hybridDisplay'}className={`${window.location.pathname === '/hybridDisplay' ? 'active' : ''}`}>HYBRID</Link>
              </h1>
          </aside>
            
            <div>
              <div className='display'>
                {InpersonEvents.map((event) => (
                      <section key={event.id} className='events'>
                        <div>
                          <img
                            src={ThreeDot}
                            alt="Options"
                            onClick={() => toggleDeleteText(event.id)}
                          />
                          {deleteTextVisible && selectedEventId === event.id && (
                            <div className="event-options">
                              <p className="register-text" onClick={() => toggleRegister(event.id)}>Register</p>
                              <p className="delete-text" onClick={() => handleRemove(event.id)}>Delete</p>
                            </div>
                          )}
                        </div>
                      
                        <img className='image' src={event.eImage} alt='' />
                        <div className='displays'>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3>{event.eName}</h3>
                            <h5>{event.ePreview}</h5>
                          </div>
                        </div>
                      </section>
                  ))}
              </div>
            </div>
        </nav> 
      ) : (
         <section className='GrandFather'>
            <aside className="aside">
              <h1>
                <Link to={'/dashboard'} className={`${window.location.pathname === '/dashboard' ? 'active' : ''}`}>INPERSON</Link>
              </h1>
              <h1>
                <Link to={'/virtualDisplay'}className={`${window.location.pathname === '/virtualDisplay' ? 'active' : ''}`}>VIRTUAL</Link>
              </h1>
              <h1>
                <Link to={'/hybridDisplay'}className={`${window.location.pathname === '/hybridDisplay' ? 'active' : ''}`}>HYBRID</Link>
              </h1>
            </aside>

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

export default InpersonDisplay;
