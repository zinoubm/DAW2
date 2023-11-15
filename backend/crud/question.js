const question=require("../models/Question");
const Questionnaire=require("../models/Questionnaire");
const Rpnsquest=require("../models/Rpnsquest");

// ################################# CREATE ##############################
let createQst=async(qstInfo)=>{
    let create = new question(qstInfo);
    create.save();
}

let createRepenseQst=async(RqstInfo)=>{
    let create = new Rpnsquest(RqstInfo);
    create.save();
}

let createQuestionnaire=async (idPatient,qst)=>{
    qst.id_Patient=idPatient;
    let create = new Questionnaire(qst);
    create.save();
}
module.exports={
    createQst,
    createRepenseQst,
    createQuestionnaire
}