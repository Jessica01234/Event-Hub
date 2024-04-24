import React from 'react';
import './displayData.css';
import { Link, useNavigate } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import NavBar from "../NAVBAR/navbar";
import ThreeDot from "../images/dot.png";
import { useState } from 'react';


const VirtualDisplay = () => {
 
  const [deleteTextVisible, setDeleteTextVisible] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const [VirtualEvents, setVirtualEvents] = useState(() => {
    const virtualEventsString = localStorage.getItem('VirtualEvents');
    return virtualEventsString ? JSON.parse(virtualEventsString) : [];
  });

  const nav = useNavigate();

  const handleDelete = (eventId) => {
    const updatedHybridEvents = VirtualEvents.filter(event => event.id !== eventId);
    localStorage.setItem('VirtualEvents', JSON.stringify(updatedHybridEvents));
    setVirtualEvents(updatedHybridEvents);
    setDeleteTextVisible(false);
    setSelectedEventId(null);
  };

  const toggleDeleteText = (eventId) => {
    if (selectedEventId === eventId) {
      // Clicked on the same event again, hide delete text
      setDeleteTextVisible(false);
      setSelectedEventId(null);
    } else {
      // Clicked on a different event, show delete text
      setDeleteTextVisible(true);
      setSelectedEventId(eventId);
    }
  };

  const toggleRegister = (eventId) => {
    if (selectedEventId === eventId) {
      setDeleteTextVisible(false);
      setSelectedEventId(null);
      nav(`/virtualRegister`)
    } else {
      setDeleteTextVisible(true);
      selectedEventId(eventId);
    }
  };
  return (
    <>
    <NavBar />
      <div className='displayComp'>      
        {VirtualEvents && VirtualEvents.length > 0 ? (
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
                    {VirtualEvents.map((event) => (
                      <section key={event.id} className='events'>
                        <div>
                          <img
                            src={ThreeDot}
                            alt="Options"
                            onClick={() => toggleDeleteText(event.id)}
                          />
                          {deleteTextVisible && selectedEventId === event.id && (
                            <div>
                               <p className="register-text" onClick={() => toggleRegister(event.id)}>Register</p>
                              <p className="delete-text" onClick={() => handleDelete(event.id)}>Delete</p>
                            </div>
                          )}
                        </div>
                        
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
    </>
  );
};

export default VirtualDisplay;
