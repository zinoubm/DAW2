const { createUser, getUserByEmail } = require("../crud/crudUser");
const { createSession } = require("../crud/crudSession");

// Admin permission required
const registerAdmin = async (req, res) => {
  console.log("current user from middlware in route", req.currentUser);
  res.status(200).json({ currentUser: req.currentUser });
};

// Admin permission required
const registerDoctor = async (req, res) => {
  res.status(200).json(req.body);
};

// no permission required
const registerPatient = async (req, res) => {
  res.status(200).json(req.body);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userId = await getUserByEmail(email);

  const session = await createSession(userId);
  res.status(200).json({ user: userId, session: session });
};

const logout = async (req, res) => {};

module.exports = {
  registerAdmin,
  registerDoctor,
  registerPatient,
  login,
  logout,
};
