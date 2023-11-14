const Session = require("../models/Session");

// createSession(userId) -> sessionId
const createSession = async (userId) => {
  try {
    const newSession = new Session();
    await newSession.save();

    return newSession._id.toString();
  } catch (error) {
    console.error("Error creating session:", error);
    return null;
  }
};

// getUserFromSession(sessionId) -> userId

// deleteSession(sessionId) -> sessionId
