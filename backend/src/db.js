const Sequelize = require('sequelize')
const initModels = require('./models/init-models')
const config = require('./config/db.json')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: 'mysql',
   });
var models = initModels(sequelize)

module.exports = ({
    sequelize : sequelize,
    models : models
})