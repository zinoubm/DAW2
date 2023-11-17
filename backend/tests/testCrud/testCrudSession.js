const mongoose = require("mongoose");
const {
  createSession,
  getUserFromSession,
  deleteSession,
} = require("../../crud/crudSession");

require("dotenv").config({ path: ".env" });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(async () => {
    console.log("db connected");

    const sessionId = await createSession("65523cc0942992ccdba15774");

    console.log("session created: ", sessionId);

    const userId = await getUserFromSession(sessionId);

    console.log("The user from test: ", userId);

    const deletedSessionId = await deleteSession(sessionId);

    console.log("Deleted Session: ", deletedSessionId);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
