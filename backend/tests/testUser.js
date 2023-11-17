const mongoose = require("mongoose");
const {
  createUser,
  createAdmin,
  createDoctor,
  createPatient,
  getUserByEmail,
} = require("../crud/crudUser");
const { rangeRight } = require("lodash");

require("dotenv").config({ path: ".env" });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

const userId = createUser({
  Nom: "John",
  Prenom: "Doe",
  Gener: "Male",
  dt_Naiss: new Date("1990-01-01"),
  email: "john.wow@example.com",
  password: "hashed_password",
  is_accepte: true,
}).then((r) => {
  console.log("User created sccussfuly with userId: ", r);
});

const adminUserId = createAdmin(
  {
    Nom: "Boumaza",
    Prenom: "Zine Eddine",
    Gener: "Male",
    dt_Naiss: new Date("2000-01-01"),
    email: "zaine@amiaddicted.com",
    password: "12345678",
    is_accepte: true,
  },
  {
    Role: "ADMIN",
    Autorisation: "read-write",
  }
).then((r) => {
  console.log("Admin created sccussfuly with userId: ", r);
});

const doctorUserId = createDoctor(
  {
    Nom: "Hamid",
    Prenom: "Laroussi",
    Gener: "Male",
    dt_Naiss: new Date("1990-01-01"),
    email: "doctor@example.com",
    password: "hashed_password",
    is_accepte: true,
  },
  {
    Specilite: "Psycologue",
    Sess_thrp_plnf: "??",
    med_atrbs: "??",
  }
).then((r) => {
  console.log("Doctor created sccussfuly with userId: ", r);
});

const patientUserId = createPatient(
  {
    Nom: "Hamid",
    Prenom: "Laroussi",
    Gener: "Male",
    dt_Naiss: new Date("1990-01-01"),
    email: "patient@example.com",
    password: "hashed_password",
    is_accepte: true,
  },
  {
    niveau_dadd: "na",
    moyenne_dheur: 0,
    moyenne_dMoinsj: 0,
    score_dinsom: 0,
    score_somlnc: 0,
    score_danxi: 0,
    score_dépr: 0,
    autres_attrpat: "attr",
  }
).then((r) => {
  console.log("Patient created sccussfuly with userId: ", r);
});

getUserByEmail("patient@example.com").then((r) => {
  console.log("Got the userId from email, result:  ", r);
});
