const Sequelize = require('sequelize')
const initModels = require('../models/init-models')
const sequelize = new Sequelize('QLKhachSan', 'duy', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
   });
const LoaiPhongs = require('../models/LoaiPhongs')
var models = initModels(sequelize)
class SiteController{
    // [GET] /news
    async index(req,res){
        try{
            let data = await models.Phongs.findAll()
              
            console.log(data)
            return res.send(
                JSON.stringify(data)
            )
        }
        catch(e)
        {
            console.log(e)
        }
    }
    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController