import React from 'react';
import './HouseRent.css';
import pic1 from '../../../images/Rectangle 394.png';
import pic2 from '../../../images/Rectangle 396.png';
import pic3 from '../../../images/Rectangle 398.png';
import pic4 from '../../../images/Rectangle 405.png';
import pic5 from '../../../images/Rectangle 403.png';
import pic6 from '../../../images/Rectangle 404.png';
import HouseRentCart from '../HouseRent-cart/HouseRentCart';

const HouseRent = () => {
    const houseRentData = [

        {
            id: '1',
            title: 'Washington Avenue',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic1,
            price: '150',
        },
        {
            id: '2',
            title: 'Family Apartment Three',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic2,
            price: '150',
        },
        {
            id: '3',
            title: 'Gorgeous house',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic3,
            price: '150',
        },
        {
            id: '4',
            title: 'Luxury villa',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic4,
            price: '150',
        },
        {
            id: '5',
            title: 'Epic Huda Palacio',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic5,
            price: '150',
        },
        {
            id: '6',
            title: 'Washington Avenue',
            location: 'Nasirabad H/S, Chattogram',
            bedrooms: '3',
            bathrooms: '2',
            img: pic6,
            price: '150',
        },


    ]
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
                        houseRentData.map(houseRent => <HouseRentCart key={houseRent.id} houseRent={houseRent} ></HouseRentCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;