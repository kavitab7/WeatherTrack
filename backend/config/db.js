const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        console.log('MySQL connected...');
        global.db = connection;
    } catch (error) {
        console.error('Error connecting to MySQL:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
