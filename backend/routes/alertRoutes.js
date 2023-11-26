const express = require("express");

const router = express.Router();

const {
  deleteAlerteControll,
  getAlertesControll,
} = require("../controllers/alertController");

router.route("/alert/:idAlert").delete(deleteAlerteControll);
router.route("/alert").get(getAlertesControll);

module.exports = router;
