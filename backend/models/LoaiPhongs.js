const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LoaiPhongs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ten: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DonGia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(256),
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
