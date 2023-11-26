const qstFunc = require("../crud/crudQuestion");
// ############################# CREATE
// create question
const createQstController = async (req, res) => {
  const idQ = await qstFunc.createQst(req.body);
  res.json({ success: true, idQst: idQ });
};

// create reponse de question
const createReponseQstController = async (req, res) => {
  const idRQ = await qstFunc.createRepenseQst(req.body);
  res.json({ success: true, idRepenseQst: idRQ });
};

//    create questionner
// you must put the id of patient in url
const createQuestionnaireController = async (req, res) => {
  const idPatient = req.params.idPatient;
  console.log(idPatient);
  const idQ = await qstFunc.createQuestionnaire(idPatient, req.body);
  res.json({ success: true, idQuest: idQ });
};

//    ############################## GET
//    get questions
const getAllQstController = async (req, res) => {
  qstFunc.getAllQst().then((r) => {
    res.json(r);
  });
};

//    get all repense of questions
const getAllRepenseQstController = async (req, res) => {
  qstFunc.getAllReponseQst().then((r) => {
    res.json(r);
  });
};

//      get All Questionners
const getAllQuestionnaireController = async (req, res) => {
  qstFunc.getAllQuestionnaire().then((r) => {
    res.json(r);
  });
};

// get just one you must put the id in url
const getQstController = async (req, res) => {
  idQst = req.params.idQst;
  qstFunc.getQst(idQst).then((r) => {
    res.json(r);
  });
};

const getRepenseQstController = async (req, res) => {
  idRQst = req.params.idRQst;
  qstFunc.getReponseQst(idRQst).then((r) => {
    res.json(r);
  });
};

const getQuestionnerController = async (req, res) => {
  idQuestionner = req.params.idQuestionner;
  qstFunc.getQuestionnaire(idQuestionner).then((r) => {
    res.json(r);
  });
};

// ############################ DELETE
// lazem t7ot l id f url

const deleteQstController = async (req, res) => {
  idQst = req.params.idQst;
  await qstFunc.deleteQst(idQst);
  res.json({ success: true });
};

const deleteRepQstController = async (req, res) => {
  idRepQst = req.params.idRepQst;
  await qstFunc.deleteRepQst(idRepQst);
  res.json({ success: true });
};

const deleteQuestionnaireController = async (req, res) => {
  idQuestionnaire = req.params.idQuestionnaire;
  await qstFunc.deleteQuestionnaire(idQuestionnaire);
  res.json({ success: true });
};
// ################################ UPDATE
const updateQstController = async (req, res) => {
  idQst = req.params.idQst;
  // in the body you must have the new information
  // to update
  await qstFunc.updateQst(idQst, req.body);
  res.json({ success: true });
};

const updateRepQstController = async (req, res) => {
  idRepQst = req.params.idRepQst;
  // in the body you must have the new information
  // to update
  await qstFunc.updateRepenseQst(idRepQst, req.body);
  res.json({ success: true });
};

const updateQuestionnaireController = async (req, res) => {
  idRepQuestionnaire = req.params.idRepQuestionnaire;
  // in the body you must have the new information
  // to update
  await qstFunc.updateQuestionnaire(idRepQuestionnaire, req.body);
  res.json({ success: true });
};
module.exports = {
  updateQuestionnaireController,
  updateRepQstController,
  updateQstController,
  deleteQuestionnaireController,
  deleteRepQstController,
  deleteQstController,
  createQstController,
  createReponseQstController,
  createQuestionnaireController,
  getAllQstController,
  getAllRepenseQstController,
  getAllQuestionnaireController,
  getQstController,
  getRepenseQstController,
  getQuestionnerController,
};
