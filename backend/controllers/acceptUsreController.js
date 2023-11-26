const userFunc = require("../crud/crudUser");

const findUnacceptedUserControlle = async (req, res) => {
  const { userInfo, sessionId } = req.currentUser;

  if (!userInfo || userInfo.role !== "ADMIN") {
    return res.status(500).json({
      error: "You're Not Authorized to access this recource. ADMIN ONLY",
    });
  }

  console.log(req.currentUser);

  userFunc.findUnacceptedUser().then((r) => {
    res.json(r);
  });
};

const acceptUserControlle = async (req, res) => {
  const { userInfo, sessionId } = req.currentUser;

  if (!userInfo || userInfo.role !== "ADMIN") {
    return res.status(500).json({
      error: "You're Not Authorized to access this recource. ADMIN ONLY",
    });
  }

  idUser = req.params.idUser;
  userFunc.updateUser(idUser, { is_accepte: true });
  res.json({ success: true });
};
module.exports = {
  findUnacceptedUserControlle,
  acceptUserControlle,
};
