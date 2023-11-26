// const alert=require("./crud/crudAlertMessage");
const alertFunc = require("../crud/crudAlertMessage");
// delete alerts
// hadi te3 delete lazem ta3tiha id f url te3 alert
const deleteAlerteControll = async (req, res) => {
  const idAlert = req.params.idAlert;
  alertFunc.deleteAlert(idAlert);
  res.json({ success: "success" });
};

// get all alerts
const getAlertesControll = async (req, res) => {
  alertFunc.getAlerts().then((r) => {
    res.json(r);
  });
};

module.exports = {
  deleteAlerteControll,
  getAlertesControll,
};
