const db = require("../db")
const models = db.models
const sequelize = db.sequelize
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