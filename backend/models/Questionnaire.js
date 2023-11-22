const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionnaireSchema = new Schema({
  id_Patient:String,
  datedquest: {
    type: Date,
    default: Date.now(),
  },
  questions: [Object], //question
  autresattrques: String,
});
module.exports = mongoose.model("Questionnaire", QuestionnaireSchema);
