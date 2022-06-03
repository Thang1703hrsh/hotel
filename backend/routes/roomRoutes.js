const express = require('express')
const router = express.Router()
const {
    getAvailableRooms
} = require('../controllers/roomController')

const { protect } = require('../middleware/authMiddleware')

router.get('/available', getAvailableRooms)

module.exports = router
