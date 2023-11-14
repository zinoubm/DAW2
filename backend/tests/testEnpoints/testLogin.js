const axios = require("axios");
require("dotenv").config({ path: ".env" });

const HOSTNAME = process.env.HOSTNAME;

const apiUrl = "http://" + HOSTNAME + ":3000/api/";

const requestData = {
  email: "zineeddine@daw.com",
  password: "12345678",
};

axios
  .post(`${apiUrl}/login`, requestData)
  .then((response) => {
    console.log("Registration successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Registration failed:",
      error.response ? error.response.data : error.message
    );
  });
