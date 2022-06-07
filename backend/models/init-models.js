var DataTypes = require("sequelize").DataTypes;
var _Accounts = require("./Accounts");
var _DonDatPhongs = require("./DonDatPhongs");
var _Khachs = require("./Khachs");
var _LoaiKhachs = require("./LoaiKhachs");
var _LoaiPhongs = require("./LoaiPhongs");
var _Phongs = require("./Phongs");
var _SuDungs = require("./SuDungs");
var _hesophu = require("./hesophu");

function initModels(sequelize) {
  var Accounts = _Accounts(sequelize, DataTypes);
  var DonDatPhongs = _DonDatPhongs(sequelize, DataTypes);
  var Khachs = _Khachs(sequelize, DataTypes);
  var LoaiKhachs = _LoaiKhachs(sequelize, DataTypes);
  var LoaiPhongs = _LoaiPhongs(sequelize, DataTypes);
  var Phongs = _Phongs(sequelize, DataTypes);
  var SuDungs = _SuDungs(sequelize, DataTypes);
  var hesophu = _hesophu(sequelize, DataTypes);

  SuDungs.belongsTo(DonDatPhongs, { as: "idDonDat_DonDatPhong", foreignKey: "idDonDat"});
  DonDatPhongs.hasMany(SuDungs, { as: "SuDungs", foreignKey: "idDonDat"});
  Accounts.belongsTo(Khachs, { as: "CMNDKhach_Khach", foreignKey: "CMNDKhach"});
  Khachs.hasMany(Accounts, { as: "Accounts", foreignKey: "CMNDKhach"});
  DonDatPhongs.belongsTo(Khachs, { as: "CMNDKhach_Khach", foreignKey: "CMNDKhach"});
  Khachs.hasMany(DonDatPhongs, { as: "DonDatPhongs", foreignKey: "CMNDKhach"});
  Khachs.belongsTo(Khachs, { as: "idQuanLy_Khach", foreignKey: "idQuanLy"});
  Khachs.hasMany(Khachs, { as: "Khaches", foreignKey: "idQuanLy"});
  Khachs.belongsTo(LoaiKhachs, { as: "LoaiKhach_LoaiKhach", foreignKey: "LoaiKhach"});
  LoaiKhachs.hasMany(Khachs, { as: "Khaches", foreignKey: "LoaiKhach"});
  Phongs.belongsTo(LoaiPhongs, { as: "idLoaiPhong_LoaiPhong", foreignKey: "idLoaiPhong"});
  LoaiPhongs.hasMany(Phongs, { as: "Phongs", foreignKey: "idLoaiPhong"});
  DonDatPhongs.belongsTo(Phongs, { as: "idPhong_Phong", foreignKey: "idPhong"});
  Phongs.hasMany(DonDatPhongs, { as: "DonDatPhongs", foreignKey: "idPhong"});

  return {
    Accounts,
    DonDatPhongs,
    Khachs,
    LoaiKhachs,
    LoaiPhongs,
    Phongs,
    SuDungs,
    hesophu,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
