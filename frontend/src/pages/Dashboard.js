import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearchLocation } from 'react-icons/fa'

const Dashboard = () => {
    const [weatherReports, setWeatherReports] = useState([]);

    const fetchWeatherReports = async () => {
        try {
            const response = await axios.get('/api/weather/reports', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setWeatherReports(response.data)
        } catch (error) {
            console.error('Error fetching weather reports');
        }
    };

    useEffect(() => {
        fetchWeatherReports()
    }, []);

    return (
        <div className="container mt-5">
            <h3 className="mb-4">
                <FaSearchLocation className="me-2 text-primary" />
                Weather Reports
            </h3>
            {weatherReports.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>City</th>
                                <th>Temperature (°C)</th>
                                <th>Condition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weatherReports.map((report, index) => {
                                const weatherData = JSON.parse(report.weather_info);
                                console.log(weatherData);
                                return (
                                    <tr key={index}>
                                        <td>{report.username}</td>
                                        <td>{report.city}</td>
                                        <td>{weatherData?.current?.temperature || 'N/A'}</td>
                                        <td>{weatherData?.current?.weather_descriptions[0] || 'No description'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-muted">No weather reports found.</p>
            )}
        </div>
    );
};

export default Dashboard;
