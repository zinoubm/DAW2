const {
  createUser,
  createAdmin,
  createDoctor,
  createPatient,
  getUserByEmail,
} = require("../crud/crudUser");

const { createSession } = require("../crud/crudSession");

const registerAdmin = async (req, res) => {
  const { Nom, Prenom, Gener, dt_Naiss, email, password, Autorisation } =
    req.body;

  const user = await getUserByEmail(email);

  if (user) {
    return res.status(500).json({ message: "Email already existing" });
  }

  const adminId = await createAdmin(
    {
      Nom: Nom,
      Prenom: Prenom,
      Gener: Gener,
      dt_Naiss: new Date(dt_Naiss),
      email: email,
      password: password,
      is_accepte: false,
    },
    {
      Role: "ADMIN",
      Autorisation: Autorisation,
    }
  );

  res
    .status(200)
    .json({ message: "Admin " + adminId + " created Successfuly" });
};

const registerDoctor = async (req, res) => {
  const {
    Nom,
    Prenom,
    Gener,
    dt_Naiss,
    email,
    password,
    Specilite,
    Sess_thrp_plnf,
    med_atrbs,
  } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    return res.status(500).json({ message: "Email already existing" });
  }

  const doctorId = await createDoctor(
    {
      Nom: Nom,
      Prenom: Prenom,
      Gener: Gener,
      dt_Naiss: new Date(dt_Naiss),
      email: email,
      password: password,
      is_accepte: true,
    },
    {
      Specilite: Specilite,
      Sess_thrp_plnf: Sess_thrp_plnf,
      med_atrbs: med_atrbs,
    }
  );

  res
    .status(200)
    .json({ message: "Doctor " + doctorId + " created Successfuly" });
};

const registerPatient = async (req, res) => {
  const {
    Nom,
    Prenom,
    Gener,
    dt_Naiss,
    email,
    password,
    niveau_dadd,
    moyenne_dheur,
    moyenne_dMoinsj,
    score_dinsom,
    score_somlnc,
    score_danxi,
    score_dépr,
    autres_attrpat,
  } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    return res.status(500).json({ message: "Email already existing" });
  }

  const patientId = await createPatient(
    {
      Nom: Nom,
      Prenom: Prenom,
      Gener: Gener,
      dt_Naiss: new Date(dt_Naiss),
      email: email,
      password: password,
      is_accepte: false,
    },
    {
      niveau_dadd: niveau_dadd,
      moyenne_dheur: moyenne_dheur,
      moyenne_dMoinsj: moyenne_dMoinsj,
      score_dinsom: score_dinsom,
      score_somlnc: score_somlnc,
      score_danxi: score_danxi,
      score_dépr: score_dépr,
      autres_attrpat: autres_attrpat,
    }
  );

  res
    .status(200)
    .json({ message: "Patient " + patientId + " created Successfuly" });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user)
    return res
      .status(404)
      .json({ error: "Couldn't find a user with this email!" });

  if (user.password !== password)
    return res.status(404).json({ error: "Wrong password!" });

  const session = await createSession(user._id);
  res.status(200).json({ user: user, session: session });
};

const logout = async (req, res) => {};

module.exports = {
  registerAdmin,
  registerDoctor,
  registerPatient,
  login,
  logout,
};
