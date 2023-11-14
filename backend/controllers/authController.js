const { createUser, getUserByEmail } = require("../crud/crudUser");

// Admin permission required
const registerAdmin = async (req, res) => {
  res.status(200).json(req.body);
};

// Admin permission required
const registerDoctor = async (req, res) => {
  res.status(200).json(req.body);
};

// no permission required
const registerPatient = async (req, res) => {
  res.status(200).json(req.body);
};

const login = async (req, res) => {};

const logout = async (req, res) => {};

module.exports = { register, login, logout };
