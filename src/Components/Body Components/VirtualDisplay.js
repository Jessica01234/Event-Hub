import React from 'react';
import './displayData.css';
import { WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

const VirtualDisplay = () => {
  const VirtualEventsString = localStorage.getItem('VirtualEvents');
  const VirtualEvents = JSON.parse(VirtualEventsString);

  return (
    <div className='displayComp'>
      <h1>Virtual Events</h1>
      <div className='display'>
        {VirtualEvents.map((event, index) => (
          <div key={index} className='events'>
            <img className='image' src={event.eImage} alt='' />
            <section className='displays'>
              <div>
                <h3>{event.eDay}</h3>
                <h3>{event.eLocation}</h3>
              </div>
              <div>
                <h2>{event.eName}</h2>
                <h4>{event.ePreview}</h4>
              </div>
            </section>

            {/* Rendering share buttons for each event */}
            {renderShareButtons(event)}
          </div>
        ))}
      </div>
    </div>
  );

  // Define the function inside the component to access the event values
  function renderShareButtons(event) {
    const location = event.eLocation;
    const decodedLink = decodeURIComponent('https%3A%2F%2Fevent-mgt.vercel.app%2Fdashboard');
    const shareMessage = `Check out this virtual event: ${event.eName} at ${event.eLocation}. Preview: ${event.ePreview}. Link: ${decodedLink}`;    

    if (location === 'WhatsApp') {
      return (
        <WhatsappShareButton
          url={`whatsapp://send?text=${encodeURIComponent(shareMessage)}`}
          title={event.eName}
          separator=" - "
        >
          <button className='whatsappBtn btn1'>Share on WhatsApp</button>
        </WhatsappShareButton>
      );      

    } else if (location === 'Telegram') {
      return (
        <TelegramShareButton
          url={`https://t.me/share/url?url=${encodeURIComponent('https://your-event-url.com')}&text=${encodeURIComponent(shareMessage)}`}
          title={event.eName}
        >
          <button className='whatsappBtn btn2'>Share on Telegram</button>
        </TelegramShareButton>
      );
    }else if(location === 'Facebook') {
      return (
        <FacebookShareButton
          url={`facebook://send?text=${encodeURIComponent(shareMessage)}`}
          title={event.eName}
          separator=" - "
        >
          <button className='whatsappBtn btn3'>Share on Facebook</button>
        </FacebookShareButton>
      );
    }
    // You can add more conditions or handle other cases here
    return null;
  }
};

export default VirtualDisplay;
