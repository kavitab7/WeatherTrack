const axios = require('axios');

const fetchWeather = async (city) => {
    const apiKey = process.env.WEATHERSTACK_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching weather data')
    }
};

module.exports = { fetchWeather };
