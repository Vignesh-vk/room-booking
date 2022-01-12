import React from "react";
import { Button } from "react-bootstrap";
import { Navbar, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function confirmscreen(room) {
    return (
        <div>
            <Navbar />
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucess</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>
                            Thank you for reaching out to us. Our executive will connect with
                            you regarding your booking
                        </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Link to="/home">
                            <Button variant="secondary">Close</Button>
                        </Link>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    );
}

export default confirmscreen;