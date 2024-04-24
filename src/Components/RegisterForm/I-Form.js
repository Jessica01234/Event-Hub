import React, { useState } from "react";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function InpersonEventForm() {
    const { eventId } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const navigate = useNavigate();

    const updateAttendeesDetailInLocalStorage = (newEvent) => {
        const existingAttendee = JSON.parse(localStorage.getItem('InpersonGuests')) || [];
        const updatedAttendee = [...existingAttendee, { ...newEvent, eventId }];
        localStorage.setItem('InpersonGuests', JSON.stringify(updatedAttendee));
    };

    const handleClose = () => {
        setShowModal(false);
        navigate("/dashboard");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const AttendeesDetail = {
            name: name,
            email: email,
        };

        updateAttendeesDetailInLocalStorage(AttendeesDetail);

        // Show modal when form is submitted
        setShowModal(true);
    };

    return (
        <>
            <div className="container-fluid regContainer">
                <form onSubmit={handleSubmit} className="row regForm">
                    <h1>Register</h1>
                    <div>
                        <input type="text" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Name</label>
                    </div>

                    <div>
                        <input type="email" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Email</label>
                    </div>

                    <button type="submit" className="RegBtn">Register</button>
                </form>
            </div>

            {/* Modal */}
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>

                <Modal.Header closeButton>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your registration was successful.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InpersonEventForm;
