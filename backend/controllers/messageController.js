const msgFunc = require("../crud/crudAlertMessage");
// put message
const createMsgController = async (req, res) => {
  const { sender, reciver } = req.body;

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
