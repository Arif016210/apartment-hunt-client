import React from 'react';
import './HouseRentCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBath, faBed } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HouseRentCart = ({ houseRent }) => {
    return (
        <div className="col-md-4 HouseRentCart-container">
            <img src={houseRent.img} className="card-img" />
            <div className="card-container">
                <h4>{houseRent.title}</h4>
                <h5>  <FontAwesomeIcon icon={faMapMarkerAlt} /> {houseRent.location}</h5>
                <div className="row">
                    <div className="col-md-6" >
                        <p style={{ float: 'left' }}><FontAwesomeIcon icon={faBed} /> Bedrooms:{houseRent.bedrooms}</p>
                    </div>
                    <div className="col-md-6" >
                        <p style={{ float: 'right' }}><FontAwesomeIcon icon={faBath} />Bathrooms:{houseRent.bathrooms}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <h2 style={{ float: 'left' }}>${houseRent.price}</h2>
                    </div>
                    <div className="col-md-6" >
                        <Link to="/homeDetails">
                            <button style={{ float: 'right' }} className="btn-cart">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentCart;