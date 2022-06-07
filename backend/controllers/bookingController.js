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
//@desc get all DonDatPhong
//@route GET /api/booking/unpaid
//@access Public
const unpaidBooking = asyncHandler(async (req, res) => {
    const idKhach = req.account.CMNDKhach
    //log infomation
    console.log(idKhach)
    //find DonDatPhongs with ngayTT is null
    const unpaidBooking = await sequelize.query("\
    select \
    DonDatPhongs.id,\
    datediff(DonDatPhongs.ngayKT,DonDatPhongs.ngayBD)*LoaiPhongs.DonGia as price,\
    LoaiPhongs.Ten as name,\
    Phongs.id as roomID,\
    Phongs.GhiChu as info,\
    LoaiPhongs.image as image,\
    DonDatPhongs.ngayBD as startDate,\
    DonDatPhongs.ngayKT as endDate\
    from \
        (DonDatPhongs left join \
        Phongs on DonDatPhongs.idPhong = Phongs.id)\
        left join \
        LoaiPhongs on LoaiPhongs.id = Phongs.idLoaiPhong\
        left join\
        Khachs on DonDatPhongs.CMNDKhach = Khachs.id\
        where\
        DonDatPhongs.ngayTT is null\
        and Khachs.id = '"+idKhach+"'\
    ;    \
    ",{type: sequelize.QueryTypes.SELECT})
    console.log(unpaidBooking)
    // total price
    let totalPrice = 0
    for(let i=0;i<unpaidBooking.length;i++){
        totalPrice+=unpaidBooking[i].price
    }
    res.status(200).json({
        success:true,
        bills:unpaidBooking,
        totalValue:totalPrice,
    })
})

//export
module.exports = {
    createBooking,
    unpaidBooking,
}