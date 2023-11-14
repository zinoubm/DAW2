const axios = require("axios");
require("dotenv").config({ path: ".env" });

const HOSTNAME = process.env.HOSTNAME;

const apiUrl = "http://" + HOSTNAME + ":3000/api/";

const token = "65533ba5e93d423d3b2a6180";

// register Admin
const adminRequestData = {
  username: "user",
  password: "password",
};

axios
  .post(
    `${apiUrl}/register/admin`,
    adminRequestData,

    {
      headers: {
        Authorization: `${token}`, // Add the Authorization header with the token
      },
    }
  )
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });

// // register Doctor
// const doctorRequestData = {
//   username: "user",
//   password: "password",
// };

// axios
//   .post(
//     `${apiUrl}/register/admin`,
//     requestData,

//     {
//       headers: {
//         Authorization: `Bearer ${token}`, // Add the Authorization header with the token
//       },
//     }
//   )
//   .then((response) => {
//     console.log("Registration successful:", response.data);
//   })
//   .catch((error) => {
//     console.error(
//       "Registration failed:",
//       error.response ? error.response.data : error.message
//     );
//   });

// // register Patient
// const patientRequestData = {
//   username: "user",
//   password: "password",
// };

// axios
//   .post(
//     `${apiUrl}/register/admin`,
//     requestData,

//     {
//       headers: {
//         Authorization: `Bearer ${token}`, // Add the Authorization header with the token
//       },
//     }
//   )
//   .then((response) => {
//     console.log("Registration successful:", response.data);
//   })
//   .catch((error) => {
//     console.error(
//       "Registration failed:",
//       error.response ? error.response.data : error.message
//     );
//   });
