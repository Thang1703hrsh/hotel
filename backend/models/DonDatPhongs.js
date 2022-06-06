const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DonDatPhongs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CMNDKhach: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'Khachs',
        key: 'id'
      }
    },
    idPhong: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Phongs',
        key: 'id'
      }
    },
    ngayTT: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'DonDatPhongs',
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
        name: "FK_DonDatPhongs_Khachs",
        using: "BTREE",
        fields: [
          { name: "CMNDKhach" },
        ]
      },
      {
        name: "FK_DonDatPhongs_Phongs",
        using: "BTREE",
        fields: [
          { name: "idPhong" },
        ]
      },
    ]
  });
};
