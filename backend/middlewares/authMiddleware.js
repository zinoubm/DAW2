const { createSession, getUserFromSession } = require("../crud/crudSession");
const { getUser } = require("../crud/crudUser");

const currentUser = async (req, res, next) => {
  try {
    const authToken = req.header("Authorization");

    userId = await getUserFromSession(authToken);

    userInfo = await getUser(userId.toString());

    req.currentUser = {
      userId: userId,
      userInfo: userInfo,
    };

    next();
  } catch (error) {
    console.error("Couldn't Get currentUser:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { currentUser };
