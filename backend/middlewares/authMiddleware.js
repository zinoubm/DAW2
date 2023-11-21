const { createSession, getUserFromSession } = require("../crud/crudSession");
const { getUser } = require("../crud/crudUser");

const currentUser = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization");
    const user = await getUserFromSession(authToken);
    req.currentUser = {
      userInfo: user,
      sessionId: authToken,
    };

    next();
  } catch (error) {
    console.error("Couldn't Get currentUser:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { currentUser };
