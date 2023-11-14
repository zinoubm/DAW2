const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
  // userId: String,
  Role: String,
  Autorisation: String,
});
module.exports = mongoose.model("Admin", AdminSchema);
