const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SuDungs', {
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
    ngayBD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ngayKT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SuDungs',
    timestamps: true,
    indexes: [
      {
        name: "FK_SuDungs_Phongs",
        using: "BTREE",
        fields: [
          { name: "idPhong" },
        ]
      },
      {
        name: "FK_SuDungs_Khachs",
        using: "BTREE",
        fields: [
          { name: "CMNDKhach" },
        ]
      },
    ]
  });
};
