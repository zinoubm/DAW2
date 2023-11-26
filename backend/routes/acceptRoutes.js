const express = require("express");

const router = express.Router();

const {
  findUnacceptedUserControlle,
  acceptUserControlle,
} = require("../controllers/acceptUsreController");

router.route("/unacceptedUsers").get(findUnacceptedUserControlle);
router.route("/acceptUser/:idUser").put(acceptUserControlle);

module.exports = router;
