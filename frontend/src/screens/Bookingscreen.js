import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import './booking.css'
import swal from 'sweetalert';

class Model extends React.Component {
    render() {
        console.log(window.location.href);
        return (
            <div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        phone: null,
                        checkin: '',
                        checkout: ''

                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required(' Name is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        phone: Yup.number()
                            .required('Phone No is required')
                            .min(10, "minimum 10 numbers"),
                        checkin: Yup.string()
                            .required('Check in date  is required'),
                        checkout: Yup.string()
                            .required('Check out  is required'),

                    })}
                    onSubmit={(data) => {
                        console.log(data);
                        axios.post('http://localhost:2000/api/confirm', data).then(res => {
                            console.log(res);
                            swal({
                                title: "Are you sure to book this room?",
                                text: "Once you click ok, it will books room",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        swal("Poof! Your Room has been booked successfully", {
                                            icon: "success",
                                            
                                        });
                                        this.props.history.push("/confirmscreen")
                                    } else {
                                        swal("You have not booked room!");
                                        this.props.history.push("/booking-page")
                                    }
                                });
                            // alert("Successfully Booked")
                        })

                    }}
                    render={({ errors, status, touched }) => (
                        <div>
                            <Navbar></Navbar>
                            <Form>
                                <div className="jumbotron">
                                    <h1 style={{ fontFamily: 'fantasy' }}>Booking Confirmation Page</h1>
                                    <div className="container-fluid" style={{ position: "relative", paddingLeft: '500px' }}>
                                        <div className="col-md-6 offset-md-3"></div>
                                        <div className="form-group">
                                            <label htmlFor="checkin" style={{ position: 'relative', right: '200px', top: '40px' }}>Guest Name</label>
                                            <Field name="name" type="text" placeholder="Enter name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                            <ErrorMessage name="name" component="div" className="error invalid-feedback" />
                                        </div>

                                        <div className="form-group" style={{ position: 'relative', bottom: '50px' }}>
                                            <label htmlFor="checkin" style={{ position: 'relative', right: '200px', top: '40px' }}>Guest Email</label>
                                            <Field name="email" type="text" placeholder="Enter email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="error invalid-feedback" />
                                        </div>

                                        <div className="input form-group" style={{ position: 'relative', bottom: '100px' }}>
                                            <label htmlFor="checkin" style={{ position: 'relative', right: '200px', top: '40px' }}>Guest Mobile Number</label>
                                            <Field name="phone" type="number" placeholder="Enter phone" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                            <ErrorMessage name="phone" component="div" className="error invalid-feedback" />
                                        </div>

                                        <div className="input form-group" style={{ position: 'relative', bottom: '150px' }}>
                                            <label htmlFor="checkin" style={{ position: 'relative', right: '200px', top: '40px' }}>Check in Date</label>
                                            <Field name="checkin" type="date" placeholder="Enter name" className={'form-control' + (errors.checkin && touched.checkin ? ' is-invalid' : '')} />
                                            <ErrorMessage name="checkin" component="div" className="error invalid-feedback" />
                                        </div>

                                        <div className="input form-group" style={{ position: 'relative', bottom: '200px' }}>
                                            <label htmlFor="checkout" style={{ position: 'relative', right: '200px', top: '40px' }}>Check out Date</label>
                                            <Field name="checkout" type="date" placeholder="Enter name" className={'form-control' + (errors.checkout && touched.checkout ? ' is-invalid' : '')} />
                                            <ErrorMessage name="checkout" component="div" className="error invalid-feedback" />
                                        </div>


                                        <div className="input form-group" style={{ position: 'relative', bottom: '200px' }}>
                                            <button type="submit" className="btn btn-primary mr-2">Confirm Booking</button>
                                            <a href="/home" className="btn btn-primary mr-2">Back</a>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>

                    )}
                />
            </div>
        )
    }
}
export default Model;