const { fetchWeather } = require('../utils/weatherAPI')

const getWeather = async (req, res) => {
    const { city } = req.body
    const userId = req.user.id

    try {
        const weatherData = await fetchWeather(city);
        const query = 'INSERT INTO weather_searches (user_id, city, weather_info) VALUES (?, ?, ?)';
        await global.db.query(query, [userId, city, JSON.stringify(weatherData)]);

        res.json(weatherData)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

const getReports = async (req, res) => {
    try {
        const query = `
            SELECT u.username, w.city, w.weather_info 
            FROM weather_searches w 
            JOIN users u ON w.user_id = u.id
        `;
        const [rows] = await global.db.query(query)
        res.json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getWeather, getReports }
