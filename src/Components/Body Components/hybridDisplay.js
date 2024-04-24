import React, { useState } from 'react';
import './displayData.css';
import { Link, useNavigate } from 'react-router-dom';
import CEImage from '../images/image 3.png';
import NavBar from '../NAVBAR/navbar';
import ThreeDot from '../images/dot.png';

const HybridDisplay = () => {
  const [deleteTextVisible, setDeleteTextVisible] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);

  const [HybridEvents, setHybridEvents] = useState(() => {
    const hybridEventsString = localStorage.getItem('HybridEvents');
    return hybridEventsString ? JSON.parse(hybridEventsString) : [];
  });

  const nav = useNavigate();

  const handleDelete = (eventId) => {
    const updatedHybridEvents = HybridEvents.filter(event => event.id !== eventId);
    localStorage.setItem('HybridEvents', JSON.stringify(updatedHybridEvents));
    setHybridEvents(updatedHybridEvents);
    setDeleteTextVisible(false);
    setSelectedEventId(null);
  };

  const toggleDeleteText = (eventId) => {
    if (selectedEventId === eventId) {
      setDeleteTextVisible(false);
      setSelectedEventId(null);
    } else {
      setDeleteTextVisible(true);
      setSelectedEventId(eventId);
    }
  };

  const toggleRegister = (eventId) => {
    if (selectedEventId === eventId) {
      setDeleteTextVisible(false);
      setSelectedEventId(null);
      nav(`/hybridRegister`); // Assuming the route includes the eventId
    } else {
      setDeleteTextVisible(true);
      setSelectedEventId(eventId);
    }
  };

  return (
    <>
      <NavBar />
      <div className='displayComp'>
        {HybridEvents && HybridEvents.length > 0 ? (
          <nav className='ancestor'>
            <aside className='aside'>
              <h1>
                <Link
                  to={'/dashboard'}
                  className={`${window.location.pathname === '/dashboard' ? 'active' : ''}`}
                >
                  INPERSON
                </Link>
              </h1>
              <h1>
                <Link
                  to={'/virtualDisplay'}
                  className={`${window.location.pathname === '/virtualDisplay' ? 'active' : ''}`}
                >
                  VIRTUAL
                </Link>
              </h1>
              <h1>
                <Link
                  to={'/hybridDisplay'}
                  className={`${window.location.pathname === '/hybridDisplay' ? 'active' : ''}`}
                >
                  HYBRID
                </Link>
              </h1>
            </aside>

            <div>
              <div className='display'>
                {HybridEvents.map((event) => (
                  <section key={event.id} className='events'>
                    <div className="event-options">
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
            <aside className='aside'>
              <h1>
                <Link
                  to={'/dashboard'}
                  className={`${window.location.pathname === '/dashboard' ? 'active' : ''}`}
                >
                  INPERSON
                </Link>
              </h1>
              <h1>
                <Link
                  to={'/virtualDisplay'}
                  className={`${window.location.pathname === '/virtualDisplay' ? 'active' : ''}`}
                >
                  VIRTUAL
                </Link>
              </h1>
              <h1>
                <Link
                  to={'/hybridDisplay'}
                  className={`${window.location.pathname === '/hybridDisplay' ? 'active' : ''}`}
                >
                  HYBRID
                </Link>
              </h1>
            </aside>

            <div className='CEDiv'>
              <div className='imageContainer'>
                <img className='CEImage' src={CEImage} alt='' />
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

export default HybridDisplay;
