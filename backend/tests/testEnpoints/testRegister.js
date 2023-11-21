const axios = require("axios");
require("dotenv").config({ path: ".env" });

const HOSTNAME = process.env.HOSTNAME;

const apiUrl = "http://" + HOSTNAME + ":3000/api/";

const token = "65533ba5e93d423d3b2a6180";

// register Admin
const adminRequestData = {
  Nom: "Boumaza",
  Prenom: "Zine Eddine",
  Gener: "Male",
  dt_Naiss: "2000-01-01",
  email: "zinou.test@amiaddicted.com",
  password: "12345678",
  Autorisation: "read-write",
};

axios
  .post(`${apiUrl}/register/admin`, adminRequestData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });

// register Doctor
const doctorRequestData = {
  Nom: "Hamid",
  Prenom: "Laroussi",
  Gener: "Male",
  dt_Naiss: new Date("1990-01-01"),
  email: "zinou.test@amiaddicted.com",
  password: "hashed_password",
  Specilite: "Psycologue",
  Sess_thrp_plnf: "??",
  med_atrbs: "??",
};

axios
  .post(`${apiUrl}/register/admin`, doctorRequestData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });

// register Patient
const patientRequestData = {
  Nom: "Hamid",
  Prenom: "Laroussi",
  Gener: "Male",
  dt_Naiss: new Date("1990-01-01"),
  email: "zinou.test@amiaddicted.com",
  password: "hashed_password",
  niveau_dadd: "na",
  moyenne_dheur: 0,
  moyenne_dMoinsj: 0,
  score_dinsom: 0,
  score_somlnc: 0,
  score_danxi: 0,
  score_dépr: 0,
  autres_attrpat: "attr",
};

axios
  .post(`${apiUrl}/register/admin`, patientRequestData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });

const requestBody = {
  deleteUserId: "65524bcc43a4abe96802db0d",
};

axios
  .delete(`${apiUrl}/user`, {
    headers: {
      Authorization: "655b0a78fc270ca3a7ed1c11",
    },
    data: requestBody,
  })
  .then((response) => {
    console.log("DELETE request successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "DELETE request failed:",
      error.response ? error.response.data : error.message
    );
  });
