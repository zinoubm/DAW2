const Session = require("../models/Session");
const User = require("../models/Utilisateur");

const createSession = async (userId) => {
  try {
    const newSession = new Session({ userId: userId });
    await newSession.save();

    return newSession._id.toString();
  } catch (error) {
    console.error("Error creating session:", error);
    return null;
  }
};

const getUserFromSession = async (sessionId) => {
  try {
    const session = await Session.findOne({ _id: sessionId });
    if (session) {
      const user = await User.findOne({ _id: session.userId });
      return user;
    }

    return null;
  } catch (error) {
    console.error("Error creating session:", error);
    return null;
  }
};

const deleteSession = async (sessionId) => {
  try {
    const sessionDeleteResponse = await Session.deleteOne({ _id: sessionId });
    return sessionDeleteResponse;
  } catch (error) {
    console.error("Error deleting session:", error);
    return null;
  }
};

module.exports = {
  createSession,
  getUserFromSession,
  deleteSession,
};
