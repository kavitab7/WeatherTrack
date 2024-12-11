const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes')
const initializeDatabase = require('./config/setupDatabase');

dotenv.config();
initializeDatabase();

const app = express()
app.use(cors());
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/weather', weatherRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
