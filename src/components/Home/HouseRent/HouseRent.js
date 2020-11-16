import React, { useState } from 'react';
import './HouseRent.css';
import fakeData from '../../../fakeData'

import HouseRentCart from '../HouseRent-cart/HouseRentCart';

const HouseRent = () => {

    const houseRent = fakeData;
    const [house, setHouse] = useState(houseRent);

    return (
        <div className="houseRent-container">
            <div className="container">
                <div className="houseRent-heading">
                    <p>House Rent</p>
                    <h3>Discover the latest Rent</h3>
                    <h3>available today</h3>
                </div>

                <div className="row">
                    {
                        house.map(houseRent => <HouseRentCart key={houseRent.id} houseRent={houseRent} ></HouseRentCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;