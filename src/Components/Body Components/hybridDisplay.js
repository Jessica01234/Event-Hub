import React from 'react';
import './displayData.css';
// import { WhatsappShareButton, TelegramShareButton, FacebookShareButton } from 'react-share';

const HybridDisplay = () => {
  const HybridEventString = localStorage.getItem('HybridEvents');
  const HybridEvents = JSON.parse(HybridEventString);

  return (
    <div className='displayComp'>
        {HybridEvents ? (
           <>
           <h1 className='H1'>Hybrid Events</h1>
            <div className='display'>
            {HybridEvents.map((event, index) => (
            <div key={index} className='events'>
              <img className='image' src={event.eImage} alt='' />
              <section className='displays'>
                <div>
                  <h3>{event.eDay}</h3>
                  <h3>Virtual Location: {event.VirtualLocation}</h3>
                  <h3>Inperson Location: {event.InPersonLocation}</h3>
                </div>
                <div>
                  <h2>{event.eName}</h2>
                  <h4>{event.ePreview}</h4>
                </div>
              </section>

              {/* Rendering share buttons for each event */}
              {/* {renderShareButtons(event)} */}
            </div>
          ))}
            </div>
           </>
        ) : (
          <p>No hybrid events available.</p>
        )}
      
    </div>
  );

  // Define the function inside the component to access the event values
  // function renderShareButtons(event) {
  //   const location = event.eLocation;
  //   const decodedLink = decodeURIComponent('https://event-mgt.vercel.app');
  //   const shareMessage = `Check out this hybrid event: ${event.eName} at ${event.VirtualLocation} (Virtual) or ${event.InPersonLocation} (In-person). Preview: ${event.ePreview}. Link: ${decodedLink}`;

  //   if (location === 'WhatsApp') {
  //     return (
  //       <WhatsappShareButton
  //         url={`whatsapp://send?text=${decodeURIComponent(shareMessage)}`}
  //         title={event.eName}
  //         separator=" - "
  //       >
  //         <button className='whatsappBtn btn1'>Share on WhatsApp</button>
  //       </WhatsappShareButton>
  //     );
  //   } else if (location === 'Telegram') {
  //     return (
  //       <TelegramShareButton
  //         url={`https://t.me/share/url?url=${decodeURIComponent('https://event-mgt.vercel.app')}&text=${decodeURIComponent(shareMessage)}`}
  //         title={event.eName}
  //       >
  //         <button className='whatsappBtn btn2'>Share on Telegram</button>
  //       </TelegramShareButton>
  //     );
  //   } else if (location === 'Facebook') {
  //     return (
  //       <FacebookShareButton
  //         url={`facebook://send?text=${decodeURIComponent(shareMessage)}`}
  //         title={event.eName}
  //         separator=" - "
  //       >
  //         <button className='whatsappBtn btn3'>Share on Facebook</button>
  //       </FacebookShareButton>
  //     );
  //   }
  //   // You can add more conditions or handle other cases here
  //   return null;
  // }
};

export default HybridDisplay;