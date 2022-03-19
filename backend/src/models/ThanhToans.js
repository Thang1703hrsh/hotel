const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThanhToans', {
    CMNDKhach: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'Khachs',
        key: 'id'
      }
    },
    idPhong: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'Phongs',
        key: 'id'
      }
    },
    ngayTT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ThanhToans',
    timestamps: true,
    indexes: [
      {
        name: "FK_ThanhToans_Phongs",
        using: "BTREE",
        fields: [
          { name: "idPhong" },
        ]
      },
      {
        name: "FK_ThanhToans_Khachs",
        using: "BTREE",
        fields: [
          { name: "CMNDKhach" },
        ]
      },
    ]
  });
};
