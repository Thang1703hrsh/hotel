const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
//connect to db
const db = require('../config/db')
const models = db.models
const sequelize = db.sequelize

//@desc create new DonDatPhong
//@route POST /api/booking
//@access Public
const createBooking = asyncHandler(async (req, res) => {
    const {roomId,startDate, endDate} = req.body
    const idKhach = req.account.CMNDKhach
    //log infomation
    console.log(roomId,startDate, endDate,idKhach)
    //create new DonDatPhong
    const newBooking = await models.DonDatPhongs.create({
        idPhong:roomId,
        CMNDKhach:idKhach,
        ngayBD:startDate,
        ngayKT:endDate,
    })
    res.status(201).json({
        success:true,
        data:newBooking,
    })
})

//export
module.exports = {
    createBooking,
}