const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SuDungs', {
    idDonDat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DonDatPhongs',
        key: 'id'
      }
    },
    CMNDKhach: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SuDungs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDonDat" },
          { name: "CMNDKhach" },
        ]
      },
    ]
  });
};
