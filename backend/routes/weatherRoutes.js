const express = require('express');
const { getWeather, getReports } = require('../controllers/weatherController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();
router.post('/get-weather', authMiddleware, getWeather)
router.get('/reports', authMiddleware, getReports)

module.exports = router;
