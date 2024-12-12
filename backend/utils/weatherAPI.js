const axios = require('axios');
require('dotenv').config({ path: './.env' })

const WEATHER_API_URL = 'http://api.weatherstack.com/current';
const API_KEY = process.env.WEATHERSTACK_API_KEY

const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${WEATHER_API_URL}`, {
            params: {
                access_key: API_KEY,
                query: city,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data', error)
        throw new Error('Failed to fetch weather data');
    }
};

module.exports = { fetchWeather };
