const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const app = express();
app.listen(3000);
app.use(express.urlencoded({ extended: true }));

console.log("All environment variables:", process.env);

console.log("MONGODB_URL:", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
