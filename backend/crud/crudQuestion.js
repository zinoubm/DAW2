const question=require("../models/Question");
const Questionnaire=require("../models/Questionnaire");
const Rpnsquest=require("../models/Rpnsquest");

// ################################# CREATE ##############################
const createQst=async(qstInfo)=>{
    let create = new question(qstInfo);
    create.save();
    return create._id;
}

const createRepenseQst=async(RqstInfo)=>{
    let create = new Rpnsquest(RqstInfo);
    create.save();
    return create._id;
}

const createQuestionnaire=async (idPatient,qst)=>{
    qst.id_Patient=idPatient;
    let create = new Questionnaire(qst);
    create.save();
    return create._id;
}
// ################################### GET
const getQst=async (idQst)=>{
    try{
    const qst= await question.findOne({_id:idQst});
    if(qst)
    return qst;
    else
    console.log("this question is not existe"); 
    } catch (error) {
        console.error("Error in getUserByEmail:", error);
    }
}

const getQuestionnaire= async (idQuestionnaire)=>{
    try{
        const qst= await Questionnaire.findOne({_id:idQuestionnaire});
        if(qst)
        return qst;
        else
        console.log("this question is not existe"); 
        } catch (error) {
            console.error("Error in getUserByEmail:", error);
        }
}

const getReponseQst=async (idRepQst)=>{
    try{
        const Rpsqst= await Rpnsquest.findOne({_id:idRepQst});
        if(Rpsqst)
        return Rpsqst;
        else
        console.log("this question is not existe"); 
        } catch (error) {
            console.error("Error in getUserByEmail:", error);
        }
}

// ################################### UPDATE
const updateQst = async (QstId, newQstInfo) => {
    await question.updateOne({_id: QstId }, newQstInfo);
};

const updateRepenseQst = async (RepQstId, newRepQstInfo) => {
    await Rpnsquest.updateOne({_id: RepQstId }, newRepQstInfo);
};

const updateQuestionnaire = async (QuestionnaireId, newQuestionnaireInfo) => {
    await Questionnaire.updateOne({_id: QuestionnaireId }, newQuestionnaireInfo);
};

// ################################ DELETE
const deleteQst= async (idQst)=>{
    await question.deleteOne({ _id: idQst});
}

const deleteRepQst= async (idRepQst)=>{
    await Rpnsquest.deleteOne({ _id: idRepQst});
}

const deleteQuestionnaire= async (idQuestionnaire)=>{
    await Questionnaire.deleteOne({ _id: idQuestionnaire});
}
module.exports={
    createQst,
    createRepenseQst,
    createQuestionnaire,
    getQst,
    getReponseQst,
    getQuestionnaire,
    updateQst,
    updateRepenseQst,
    updateQuestionnaire,
    deleteQst,
    deleteRepQst,
    deleteQuestionnaire
}