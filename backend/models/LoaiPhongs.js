const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LoaiPhongs', {
    id: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DonGia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SLToida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'LoaiPhongs',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
