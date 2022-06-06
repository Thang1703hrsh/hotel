const express = require('express')
const router = express.Router()
const {
    getAll,
} = require('../controllers/roomController')

const { protect } = require('../middleware/authMiddleware')

router.get('/getall', getAll)

module.exports = router
