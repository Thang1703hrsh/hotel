const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThamSo', {
    heso: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ThamSo',
    timestamps: true
  });
};
