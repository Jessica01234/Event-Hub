import React, { useState } from "react";
import "./RegisterForm.css";
import { useNavigate } from "react-router-dom";
// import { Spinner } from "react-bootstrap";

function RegisterationForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const updateAttendeesDetailInLocalStorage = (newEvent) => {
        // setLoading(true);
        const existingEvents = JSON.parse(localStorage.getItem('Attendee')) || [];
        const updatedEvents = [...existingEvents, newEvent];
        localStorage.setItem('Attendee', JSON.stringify(updatedEvents));
        // setLoading(false);
        console.log(localStorage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // if (!navigator.onLine) {
        //     setErrorMsg("No internet connection. Please try again later.");
        //     alert("Registration Sucessful");
        //     return;
        // }

        // setLoading(true); 
        // setErrorMsg("");

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
                    {/* {loading ? (
                    <Spinner animation="border" variant="light" />
                    ) : (
                    <p style={{color:"#fff"}}>{errorMsg}</p>
                    )}  */}
                </form>
            </div>
        </>
    );
}

export default RegisterationForm;
