import React, { useState } from 'react';
import { fetchWeather } from '../utils/weatherAPI'
import { FaSearch, FaCloud, FaTemperatureHigh, FaTint, FaWind } from 'react-icons/fa';

const HomePage = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const data = await fetchWeather(city)
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Weather App</h1>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </div>

            {error && <p className="text-danger text-center">{error}</p>}

            {weatherData && (
                <div className="card shadow-lg mb-4">
                    <div className="card-body">
                        <h3 className="card-title text-center">
                            Weather in {weatherData.location.name}, {weatherData.location.country}
                        </h3>
                        <p className="text-center">{weatherData.location.region}</p>
                        <div className="text-center mb-3">
                            <img
                                src={weatherData.current.weather_icons[0]}
                                alt={weatherData.current.weather_descriptions[0]}
                                width="100"
                            />
                        </div>
                        <p className="text-center">{weatherData.current.weather_descriptions[0]}</p>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="d-flex align-items-center">
                                    <FaTemperatureHigh className="mr-2" />
                                    <span>Temperature: {weatherData.current.temperature}°C</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center">
                                    <FaCloud className="mr-2" />
                                    <span>Cloud Cover: {weatherData.current.cloudcover}%</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex align-items-center">
                                    <FaWind className="mr-2" />
                                    <span>Wind: {weatherData.current.wind_speed} km/h</span>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="d-flex align-items-center">
                                    <FaTint className="mr-2" />
                                    <span>Humidity: {weatherData.current.humidity}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
