const mongoose = require("mongoose");
// import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const SchemaTypes = mongoose;
const AlertsSchema = new Schema({
  id_Utilisateur: {
    type: SchemaTypes.ObjectId,
    ref: "Utilisateur",
  },
  type_alrt: String,
  date_alrt: {
    type: Date,
    default: Date.now(), // Sets the default value to the current date and time
  },
});
module.exports = mongoose.model("Alerts", AlertsSchema);
