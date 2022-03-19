const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Khachs', {
    id: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    DiaChi: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LoaiKhach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'LoaiKhachs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Khachs',
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
        name: "FK_Khachs_LoaiKhachs",
        using: "BTREE",
        fields: [
          { name: "LoaiKhach" },
        ]
      },
    ]
  });
};
