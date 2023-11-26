const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const appRouter = require("./routes/appRoutes");

const { currentUser } = require("./middlewares/authMiddleware");

require("dotenv").config({ path: ".env" });

const app = express();

app.listen(3000);
console.log("Listening on port 3000");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.use(currentUser);

app.use("/api", authRouter, appRouter);

app.get("/", (req, res) => {
  res.send("ImIAddicted Is running!");
});
