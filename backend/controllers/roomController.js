const asyncHandler = require('express-async-handler')
//connect to db
const db = require('../config/db')
const models = db.models
const sequelize = db.sequelize

// @desc get available room data
// @route GET /api/rooms/available
// @access Public
const getAvailableRooms = asyncHandler(async (req, res) => {
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
module.exports = {
    getAvailableRooms
}