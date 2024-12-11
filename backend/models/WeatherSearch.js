const createWeatherSearchTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS weather_searches (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            city VARCHAR(100) NOT NULL,
            weather_info TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    `;
    await global.db.query(query);
};

module.exports = { createWeatherSearchTable };
