const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
  // userId: String,
  niveau_dadd: String,
  moyenne_dheur: Number,
  moyenne_dMoinsj: Number,
  score_dinsom: Number,
  score_somlnc: Number,
  score_danxi: Number,
  score_dépr: Number,
  autres_attrpat: String,
});
module.exports = mongoose.model("Patient", PatientSchema);
