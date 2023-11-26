const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const acceptRouter = require("./routes/acceptRoutes");
const messageRouter = require("./routes/messageRouter");
const allertRouter = require("./routes/alertRoutes");
const questionRouter = require("./routes/questionRoutes");

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

app.use(
  "/api",
  authRouter,
  acceptRouter,
  messageRouter,
  allertRouter,
  questionRouter
);

app.get("/", (req, res) => {
  res.send("ImIAddicted Is running!");
});
