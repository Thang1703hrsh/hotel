const express = require('express')
const router = express.Router()
const {
    createBooking,
    unpaidBooking,
    paidBooking,
} = require('../controllers/bookingController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, createBooking)
router.get('/unpaid', protect, unpaidBooking)
router.post('/paid', protect, paidBooking)
module.exports = router
