const msgFunc = require("../crud/crudAlertMessage");
// put message
const createMsgController = async (req, res) => {
  // lazem sender w reciver ykoun ObjectId machi
  // string ro7 ll schema te3 message drk tafhm
  const sender = req.params.senderId;
  const reciver = req.params.reciverId;
  msgFunc.createMessage(sender, reciver);
  res.json({ success: true });
};

// get messages
const getAllMsgOrderByDate = async (req, res) => {
  msgFunc.getMessages().then((r) => {
    res.json(r);
  });
};
module.exports = {
  createMsgController,
  getAllMsgOrderByDate,
};
