import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Bookingscreen from "../screens/Bookingscreen";
function Room({ room, fromdate, todate }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs">
      <div className="col-md-4">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          <p>Free Wifi , Car Parking , Television ,A C</p>
          <p>Max count:{room.maxcount}</p>
          <p>Phone number:{room.phonenumber}</p>
          <p>Rent Per Day:{room.rentperday}</p>
          <p>Type:{room.type}</p>
        </b>
        <div style={{ float: "right" }}>

          <Link to={`/book/${room._id}`}><button className="btn btn-primary mr-2">Book now</button></Link>

          <button className="btn btn-primary" onClick={handleShow}>View Details</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" data--aos='zoom-in'>
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Carousel nextLabel="" prevLabel="">
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img
                    src={url}
                    className="img-fluid"
                    style={{ height: "400px" }}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button variant="btn btn-primary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
