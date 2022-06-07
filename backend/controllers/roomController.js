const asyncHandler = require('express-async-handler')
//connect to db
const db = require('../config/db')
const models = db.models
const sequelize = db.sequelize

// @desc get all room data
// @route GET /api/rooms/available
// @access Public
const  getAll= asyncHandler(async (req, res) => {
    // test = await sequelize.query("select * from Phongs where Phongs.id not in ( SELECT Phongs.id FROM Phongs left join DonDatPhongs on Phongs.id=DonDatPhongs.idPhong WHERE ngayKT>=CURDATE());", 
    // { 
    //     type: sequelize.QueryTypes.SELECT ,
    //     mapToModel: true,
    // })
    test = await models.Phongs.findAll({
        include: [
            {
                as:"LoaiPhong_LoaiPhong",
                model: models.LoaiPhongs,
            },
        ],
    })


    res.status(200).json(test)
    console.log(test)
}
)
// @ desc get available room data
// @ route GET /api/rooms/available
// @ access Public
const getAvailable = asyncHandler(async (req, res) => {
    data = await sequelize.query("select Phongs.id,LoaiPhongs.Ten,LoaiPhongs.DonGia,LoaiPhongs.image \
    from Phongs left join LoaiPhongs on Phongs.idLoaiPhong = LoaiPhongs.id \
    where \
        Phongs.id not in ( \
        SELECT Phongs.id \
        FROM Phongs left join DonDatPhongs on Phongs.id=DonDatPhongs.idPhong \
        WHERE ngayKT>=CURDATE() AND ngayBD <= CURDATE()\
        )",
        {
            type: sequelize.QueryTypes.SELECT,
            mapToModel: false,
        }
    )
    // change attribute Ten to name
    data.forEach(element => {
        element.name = element.Ten
        delete element.Ten
    })
    // change attribute DonGia to price
    data.forEach(element => {
        element.price = element.DonGia
        delete element.DonGia
    }
    )
    
    res.status(200).json(data)
})
module.exports = {
    getAll,
    getAvailable,
}