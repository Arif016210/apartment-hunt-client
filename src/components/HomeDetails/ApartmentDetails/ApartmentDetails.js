import React from 'react';
import './ApartmentDetails.css';
import pic7 from '../../../images/Rectangle 406.png';
import pic8 from '../../../images/Rectangle 407.png';
import pic9 from '../../../images/Rectangle 408.png';
import pic10 from '../../../images/Rectangle 409.png';
import pic11 from '../../../images/Rectangle 410.png';
import { useForm } from 'react-hook-form';

const ApartmentDetails = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="apartmentDetails-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="img-section">
                            <img src={pic7} alt="pic" className="img-fluid" />

                            <div className="row img-section-small">
                                <div className="col-md-3">
                                    <img src={pic8} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic9} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic10} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic11} alt="pic" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <h2>Family Apartment Three</h2>
                            </div>
                            <div className="col-md-4">
                                <h2 style={{ float: 'right' }}>$212</h2>
                            </div>
                        </div>


                        <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        <h3>Price Details-</h3>
                        <p>Rent/Month: $550 (negotiable) </p>
                        <p>Service Charge : 8,000/= Tk per month,subject to change </p>
                        <p>Security Deposit : 3 month’s rent Flat </p>
                        <p>Release Policy : 3 months earlier notice required</p>

                        <h3>Property Details-</h3>
                        <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                        <p>Flat Size : 3000 Sq Feet.</p>
                        <p>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                        <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                        <p>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                        <p>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>

                    </div>


                    <div className="col-md-4">

                        <form className="apartment-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="name" placeholder="Full Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="number" ref={register({ required: true })} name="number" placeholder="Phone No." className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="email" placeholder="Email Address" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <textarea type="text" rows="8" ref={register({ required: true })} name="massage" placeholder="Massage..." className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn-modify form-control">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;