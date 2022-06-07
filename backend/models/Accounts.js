const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts', {
    id: {
      type: DataTypes.STRING(15),
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
    _password: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Accounts',
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
        name: "FK_ACcounts_Khachs",
        using: "BTREE",
        fields: [
          { name: "CMNDKhach" },
        ]
      },
    ]
  });
};
