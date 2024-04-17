import React, { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";


function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [errormsg, setErrormsg] = useState("");
    
    const navigate = useNavigate();

    const updateAttendeesDetailInLocalStorage = (newEvent) => {
       
        const existingAttendee = JSON.parse(localStorage.getItem('Attendee')) || [];
        const updatedAttendee = [...existingAttendee, newEvent];
        localStorage.setItem('Attendee', JSON.stringify(updatedAttendee));
        console.log(localStorage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!navigator.onLine) {
           
        }else if(navigator.onLine){
            alert("Registration Sucessful");
        }

        const AttendeesDetail = {
            name: name,
            email: email,
        };

        updateAttendeesDetailInLocalStorage(AttendeesDetail);

        // Navigate to the dashboard with the updated attendeesDetails
        navigate(`/dashboard`);
    };

    return (
        <>
            <div className="container-fluid regContainer">
                <form onSubmit={handleSubmit} className="row regForm">
                    <h1>Register</h1>
                    <div>
                        <input type="text" required="required" 
                        value={name} onChange={(e) => setName(e.target.value)} />
                         <label>Name</label>
                    </div>

                    <div>
                        <input type="email" required="required"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>

                    <button type="submit" className="RegBtn">Register</button>
                </form>
            </div>
        </>
    );
}

export default Form;
