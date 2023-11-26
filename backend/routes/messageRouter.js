const express = require("express");

const router = express.Router();

const {
  createMsgController,
  getAllMsgOrderByDate,
} = require("../controllers/messageController");

router.route("/message").post(createMsgController);
router.route("/message").get(getAllMsgOrderByDate);

module.exports = router;
