import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCloudSun, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaHome, FaSearch, FaTachometerAlt } from 'react-icons/fa';

const Navbar = ({ isAuthenticated, handleLogout }) => {
    const navigate = useNavigate()

    const handleLogoutClick = () => {
        handleLogout();
        navigate('/')
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <FaCloudSun className="me-2" />
                    WeatherApp
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/weather-search">
                                        <FaSearch className="me-1" />
                                        Weather Search
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        <FaTachometerAlt className="me-1" />
                                        Dashboard
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <FaHome className="me-1" />
                                    Home
                                </Link>
                            </li>
                        )}
                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        <FaSignInAlt className="me-1" />
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        <FaUserPlus className="me-1" />
                                        Signup
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <button className="btn btn-danger nav-link" onClick={handleLogoutClick}>
                                    <FaSignOutAlt className="me-1" />
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
