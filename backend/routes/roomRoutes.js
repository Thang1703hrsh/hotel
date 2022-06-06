const express = require('express')
const router = express.Router()
const {
    getAll,
    getAvailable,
} = require('../controllers/roomController')

const { protect } = require('../middleware/authMiddleware')

router.get('/getall', getAll)
router.get('/getavailable', getAvailable)
module.exports = router
