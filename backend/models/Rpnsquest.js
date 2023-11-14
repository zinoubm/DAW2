const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rpnsquestSchema = new Schema({
  repnsquest: String,
  scoreattrrep: String,
  cmntrreponse: String,
  autresattrrepns: String,
});
module.exports = mongoose.model("Rpnsquest", rpnsquestSchema);
