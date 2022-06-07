const express = require('express')
const router = express.Router()
const {
    createBooking,
    unpaidBooking,
} = require('../controllers/bookingController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, createBooking)
router.get('/unpaid', protect, unpaidBooking)
module.exports = router
