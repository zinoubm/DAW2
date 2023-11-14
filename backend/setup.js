const mongoose = require("mongoose");
const { createAdmin } = require("./crud/crudUser");
require("dotenv").config({ path: ".env" });

console.log("All environment variables:", process.env);
console.log("MONGODB_URL:", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");

    const adminUserId = createAdmin(
      {
        Nom: "nom",
        Prenom: "prenom",
        Gener: "Male",
        dt_Naiss: new Date("2000-01-01"),
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        is_accepte: true,
      },
      {
        Role: "ADMIN",
        Autorisation: "read-write",
      }
    ).then((r) => {
      console.log("Admin created sccussfuly with userId: ", r);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
