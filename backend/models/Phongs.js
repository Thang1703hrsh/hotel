const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Phongs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idLoaiPhong: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LoaiPhongs',
        key: 'id'
      }
    },
    GhiChu: {
      type: DataTypes.STRING(1000),
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
        name: "FK_Phongs_LoaiPhongs",
        using: "BTREE",
        fields: [
          { name: "idLoaiPhong" },
        ]
      },
    ]
  });
};
