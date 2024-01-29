import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./event.css";

function CreateEventForm() {
  const [eName, setEname] = useState('');
  const [eImage, setEimage] = useState([]);
  const [eMonth, setEmonth] = useState('');
  const [eDay, setEday] = useState('');
  const [ePreview, setEpreview] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userDetails = {
      eName: eName,
      eImage: eImage,
      eMonth: eMonth,
      eDay: eDay,
      ePreview:ePreview,
    };
  
    console.log(userDetails);
    // localStorage.clear();
    console.log(localStorage);
  
    // Retrieve existing events from localStorage
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
  
    // Append the new event to the existing events
    const updatedEvents = [...existingEvents, userDetails];
  
    // Store the updated events in localStorage
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  
    // Navigate to the dashboard with the updated events as a query parameter
    navigate(`/dashboard?events=${encodeURIComponent(JSON.stringify(updatedEvents))}`);
  };
  

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEimage(file);

    // If you want to preview the selected image, you can use the FileReader API
    // Uncomment the following lines to enable image preview
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   // Do something with the preview (e.g., set it in state)
    //   // setPreviewImage(reader.result);
    // };
    // reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="CE">
      <h1>CREATE YOUR EVENT</h1>
        <form onSubmit={handleSubmit} className="CEform">
          <label className="CELabel">Event Name</label>
          <input
            id="EnameInput"
            type="text"
            placeholder="Event Name"
            onChange={(e) => {
              setEname(e.target.value);
            }}
          />

          <label className="CELabel">Event Month</label>
          <input
            id="EmonthInput"
            type="text"
            placeholder="MM"
            onChange={(e) => {
              setEmonth(e.target.value);
            }}
          />

          <label className="CELabel">Event Day</label>
          <input
            id="EdayInput"
            type="text"
            placeholder="DD"
            onChange={(e) => {
              setEday(e.target.value);
            }}
          />

          <label className="CELabel">Event Preview</label>
          <input
            id="EpreviewInput"
            type="text"
            placeholder="Event Preview"
            onChange={(e) => {
              setEpreview(e.target.value);
            }}
          />

          <label className="CELabel">Image</label>
          <input
            id="EimageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {/* Uncomment the following lines to enable image preview */}
          {/* {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />} */}

          <button type="submit" className="CE-Button">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEventForm;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./event.css";

// function CreateEventForm() {
//   const [eName, setEname] = useState('');
//   const [eType, setEtype] = useState('');
//   const [eImage, setEimage] = useState(null); // Updated to use null for initial state
//   const [previewImage, setPreviewImage] = useState(null); // New state for image preview
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const userDetails = {
//       eName: eName,
//       eType: eType,
//       eImage: eImage,
//     };

//     console.log(userDetails);
//     console.log(localStorage);

//     // Retrieve existing events from localStorage
//     const existingEvents = JSON.parse(localStorage.getItem('events')) || [];

//     // Append the new event to the existing events
//     const updatedEvents = [...existingEvents, userDetails];

//     // Store the updated events in localStorage
//     localStorage.setItem('events', JSON.stringify(updatedEvents));

//     // Navigate to the dashboard with the updated events as a query parameter
//     navigate(`/dashboard?events=${encodeURIComponent(JSON.stringify(updatedEvents))}`);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setEimage(file);

//     // If you want to preview the selected image, you can use the FileReader API
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       // Set the preview image in state
//       setPreviewImage(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <>
//       <div className="CE">
//         <h1>CREATE YOUR EVENT</h1>
//         <form onSubmit={handleSubmit} className="CEform">
//           <label className="CELabel">Event Name</label>
//           <input
//             id="EnameInput"
//             type="text"
//             placeholder="Event Name"
//             onChange={(e) => {
//               setEname(e.target.value);
//             }}
//           />

//           <label className="CELabel">Event Type</label>
//           <input
//             id="EtypeInput"
//             type="text"
//             placeholder="Type of Event"
//             onChange={(e) => {
//               setEtype(e.target.value);
//             }}
//           />

//           <label className="CELabel">Image</label>
//           <input
//             id="EimageInput"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />

//           {previewImage && (
//             <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
//           )}

//           <button type="submit" className="CE-Button">
//             Create
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default CreateEventForm;
