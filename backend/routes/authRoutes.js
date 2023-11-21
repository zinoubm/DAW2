const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  registerDoctor,
  registerPatient,
  deleteUser,
  login,
  logout,
} = require("../controllers/authController");

router.route("/register/admin").post(registerAdmin);
router.route("/register/doctor").post(registerDoctor);
router.route("/register/patient").post(registerPatient);

router.route("/user").delete(deleteUser);

router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
