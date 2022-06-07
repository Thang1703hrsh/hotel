const express = require('express')
const router = express.Router()
const {
    createBooking,
    unpaidBooking,
    paidBooking,
    paidAllBooking
} = require('../controllers/bookingController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', protect, createBooking)
router.get('/unpaid', protect, unpaidBooking)
router.post('/payment/all', protect, paidAllBooking)
router.post('/payment', protect, paidBooking)

module.exports = router
