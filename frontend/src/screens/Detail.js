import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
// import Model from './Model'
const Roomdetailing = () => {

    const [room, setroom] = useState([])
    // const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const location = window.location.pathname
        const id = location.split('/')[2]
        console.log(id);
        axios.get(`http://localhost:2000/api/rooms/book/${id}`)
            .then(response => {
                console.log(response);
                setroom([response.data])
                console.log("rooms", this.state.rooms);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <Navbar/>
            {room.map((room) =>
                <div class="container">
                    <div class="col-lg-8 border p-3 main-section bg-white">
                        <div class="row hedding m-0 pl-3 pt-0 pb-3" style={{ fontSize: '30px' }}>
                            Room Booking
                        </div>
                        <div class="row m-0">
                            <div class="card">
                                <img src={room.imageurls[0]} alt={room.room_Name} class="border p-3" />
                            </div>
                            <div class="col-lg-8" style={{ position: 'relative', bottom: '445px', left: '760px' }}>
                                <div class="right-side-pro-detail border p-3 m-0">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <strong><p class="m-0 p-0">{room.name}</p></strong>
                                        </div>
                                        <div class="col-lg-12">
                                            <p class="m-0 p-0 price-pro">Rent per day: Rs.{room.rentperday}</p>
                                            <hr class="p-0 m-0" />
                                        </div>
                                        <div class="col-lg-12">
                                            <p class="m-0 p-0 price-pro">Max count: {room.maxcount}</p>
                                            <hr class="p-0 m-0" />
                                        </div>
                                        <div class="col-lg-12 pt-2">
                                            <h5>Room Description</h5>
                                            <span>{room.description}</span>
                                            <hr class="m-0 pt-2 mt-2" />
                                        </div>
                                        <div class="col-lg-12">
                                            <p class="tag-section"><strong>Type : </strong><a>{room.type}</a></p>
                                        </div>
                                        <div class="col-lg-12 mt-3">
                                            <div class="row">
                                                <div class="col-lg-6 pb-2">

                                                    <Link to="/booking-page">
                                                        <Button variant="secondary">Book now</Button>
                                                    </Link>

                                                </div>
                                                <div class="col-lg-6 pb-2">
                                                    <a href="/home" class="btn btn-danger w-100">Back</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Roomdetailing
