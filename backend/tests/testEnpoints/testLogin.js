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
    console.log("Login successful:", response.data);
  })
  .catch((error) => {
    console.error(
      "Login failed:",
      error.response ? error.response.data : error.message
    );
  });
