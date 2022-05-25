const Sequelize = require('sequelize')
const initModels = require('../models/init-models')
const sequelize = new Sequelize(process.env.MYSQL_URI) // Example for postgres

var models = initModels(sequelize)

module.exports = ({
  sequelize : sequelize,
  models : models
})
