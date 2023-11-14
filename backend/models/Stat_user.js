const mongoose = require("mongoose");
// import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const StatuserSchema = new Schema({
  date_stat: {
    type: Date,
    default: Date.now(),
  },
  stat_spec_app: String,
});
module.exports = mongoose.model("Stat_user", StatuserSchema);
