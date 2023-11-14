const mongoose = require("mongoose");
const { createUser } = require("./crud/crudUser");

require("dotenv").config({ path: ".env" });

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
