var DataTypes = require("sequelize").DataTypes;
var _Khachs = require("./Khachs");
var _LoaiKhachs = require("./LoaiKhachs");
var _LoaiPhongs = require("./LoaiPhongs");
var _Phongs = require("./Phongs");
var _SuDungs = require("./SuDungs");
var _ThanhToans = require("./ThanhToans");
var _hesophu = require("./hesophu");

function initModels(sequelize) {
  var Khachs = _Khachs(sequelize, DataTypes);
  var LoaiKhachs = _LoaiKhachs(sequelize, DataTypes);
  var LoaiPhongs = _LoaiPhongs(sequelize, DataTypes);
  var Phongs = _Phongs(sequelize, DataTypes);
  var SuDungs = _SuDungs(sequelize, DataTypes);
  var ThanhToans = _ThanhToans(sequelize, DataTypes);
  var hesophu = _hesophu(sequelize, DataTypes);

  SuDungs.belongsTo(Khachs, { as: "CMNDKhach_Khach", foreignKey: "CMNDKhach"});
  Khachs.hasMany(SuDungs, { as: "SuDungs", foreignKey: "CMNDKhach"});
  ThanhToans.belongsTo(Khachs, { as: "CMNDKhach_Khach", foreignKey: "CMNDKhach"});
  Khachs.hasMany(ThanhToans, { as: "ThanhToans", foreignKey: "CMNDKhach"});
  Khachs.belongsTo(LoaiKhachs, { as: "LoaiKhach_LoaiKhach", foreignKey: "LoaiKhach"});
  LoaiKhachs.hasMany(Khachs, { as: "Khaches", foreignKey: "LoaiKhach"});
  Phongs.belongsTo(LoaiPhongs, { as: "LoaiPhong_LoaiPhong", foreignKey: "LoaiPhong"});
  LoaiPhongs.hasMany(Phongs, { as: "Phongs", foreignKey: "LoaiPhong"});
  SuDungs.belongsTo(Phongs, { as: "idPhong_Phong", foreignKey: "idPhong"});
  Phongs.hasMany(SuDungs, { as: "SuDungs", foreignKey: "idPhong"});
  ThanhToans.belongsTo(Phongs, { as: "idPhong_Phong", foreignKey: "idPhong"});
  Phongs.hasMany(ThanhToans, { as: "ThanhToans", foreignKey: "idPhong"});

  return {
    Khachs,
    LoaiKhachs,
    LoaiPhongs,
    Phongs,
    SuDungs,
    ThanhToans,
    hesophu,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
