const Session = require("../models/Session");

const createSession = async (userId) => {
  try {
    const newSession = new Session(userId);
    await newSession.save();

    return newSession._id.toString();
  } catch (error) {
    console.error("Error creating session:", error);
    return null;
  }
};

const getUserFromSession = async (sessionId) => {
  // session!?
  const session = await Session.findOne({ _id: sessionId });
  return session._id;
};

// deleteSession(sessionId) -> sessionId

module.exports = {
  createSession,
  getUserFromSession,
  // deleteSession,
};
