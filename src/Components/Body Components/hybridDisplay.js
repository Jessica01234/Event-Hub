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
           <div style={{background:"#000"}} className='display row'>
            {HybridEvents.map((event, index) => (
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
           </>
        ) : (
          <p style={{display:"none"}}>No hybrid events available.</p>
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