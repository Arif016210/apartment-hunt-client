import React from 'react';
import { Link } from 'react-router-dom';

const AddRentSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyle">
                <li>
                    <Link to="/home" >
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList">
                        <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addRent">
                        <span>Add Rent House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRent">
                        <span>My Rent</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AddRentSidebar;