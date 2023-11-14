const axios = require("axios");
require("dotenv").config({ path: ".env" });

const HOSTNAME = process.env.HOSTNAME;

const apiUrl = "http://" + HOSTNAME + ":3000/api/";

const requestData = {
  username: "user",
  password: "password",
};

axios
  .post(`${apiUrl}/register`, requestData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });
