const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sessionSchema = Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Ingredient" },
});

module.exports = mongoose.model("Session", sessionSchema);
