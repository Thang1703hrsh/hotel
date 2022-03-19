const Sequelize = require('sequelize')
const initModels = require('./models/init-models')
const config = require('./config/db.json')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: 'mysql',
    port:3306
   });
var models = initModels(sequelize)

module.exports = ({
    sequelize : sequelize,
    models : models
})