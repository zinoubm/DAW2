const axios = require("axios");
require("dotenv").config({ path: ".env" });

const HOSTNAME = process.env.HOSTNAME;

const apiUrl = "http://" + HOSTNAME + ":3000/api/";

const loginRequestData = {
  email: "admin@example.com",
  password: "hashed_password",
};

axios
  .post(`${apiUrl}/login`, loginRequestData)
  .then((response) => {
    console.log("Login successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Logout failed:",
      error.response ? error.response.data : error.message
    );
  });

axios
  .post(
    `${apiUrl}/logout`,
    {},
    {
      headers: {
        Authorization: "655b076da0812c4d485a5b40",
      },
    }
  )
  .then((response) => {
    console.log("Logout successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Logout failed:",
      error.response ? error.response.data : error.message
    );
  });
