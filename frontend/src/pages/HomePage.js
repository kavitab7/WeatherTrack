import React from 'react';
import { Link } from 'react-router-dom';
import { FaCloudSun, FaUserAlt } from 'react-icons/fa';

const HomePage = ({ isAuthenticated }) => {
    return (
        <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,1) 30%, rgb(13 110 253) 98%)', height: '90vh' }} className=" text-center mt-5">
            <h1>Welcome to WeatherApp</h1>
            <p className="lead">
                <FaCloudSun size={50} className="text-primary me-2" />
                Your one-stop solution for weather updates!
            </p>
            {!isAuthenticated && <div className="d-flex justify-content-center mt-4">
                <Link to="/signup" className="btn btn-primary me-3">
                    <FaUserAlt className="me-2" /> Signup
                </Link>
                <Link to="/login" className="btn btn-secondary">
                    <FaUserAlt className="me-2" /> Login
                </Link>
            </div>}
        </div>
    );
};

export default HomePage;
