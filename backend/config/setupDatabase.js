const { connectDB } = require('./db');
const { createUserTable } = require('../models/User');
const { createWeatherSearchTable } = require('../models/WeatherSearch');

const initializeDatabase = async () => {
    try {
        await connectDB();
        await createUserTable();
        await createWeatherSearchTable();
        console.log('Tables created or already exist!');
    } catch (error) {
        console.error('Error initializing database:', error.message);
        process.exit(1);
    }
};

module.exports = initializeDatabase;
