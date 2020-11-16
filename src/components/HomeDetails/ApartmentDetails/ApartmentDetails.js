import React from 'react';
import './ApartmentDetails.css';
import pic7 from '../../../images/Rectangle 406.png';
import pic8 from '../../../images/Rectangle 407.png';
import pic9 from '../../../images/Rectangle 408.png';
import pic10 from '../../../images/Rectangle 409.png';
import pic11 from '../../../images/Rectangle 410.png';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';

const ApartmentDetails = (props) => {
    const { houseId } = useParams();
    const selectedHouse = fakeData.find(house => house.id === houseId);



    const { title, img, img1, img2, img3, img4, price, apartmentDescription, priceDetails, propertyDetails } = selectedHouse;

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="apartmentDetails-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="img-section">
                            <img src={img} alt="pic" className="img-fluid" />

                            <div className="row img-section-small">
                                <div className="col-md-3">
                                    <img src={img1} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={img2} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={img3} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={img4} alt="pic" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <h2> {title} </h2>
                            </div>
                            <div className="col-md-4">
                                <h2 style={{ float: 'right' }}>$ {price} </h2>
                            </div>
                        </div>


                        <p> {apartmentDescription} </p>
                        <h3>Price Details-</h3>
                        <p> {priceDetails} </p>

                        <h3>Property Details-</h3>
                        <p> {propertyDetails} </p>

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
                                <Link to="/myRent">
                                    <button type="submit" className="btn-modify form-control">Submit</button>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;