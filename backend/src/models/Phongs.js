const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Phongs', {
    id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    LoaiPhong: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'LoaiPhongs',
        key: 'id'
      }
    },
    GhiChu: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Phongs',
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
      {
        name: "FK_Phong_LoaiPhong",
        using: "BTREE",
        fields: [
          { name: "LoaiPhong" },
        ]
      },
    ]
  });
};
