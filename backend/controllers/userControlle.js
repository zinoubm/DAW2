let userFunc = require("../curd/user");
//############### FUNC OF POST ####################
let createUser = (req, res) => {
  console.log(req.body);
  userFunc.createUser(req.body).then((existe) => {
    if (existe.isE == true) {
      console.log("is already exist");
      //ki y3od exist dirlou response ta3ou
      res.redirect("/");
    } else {
      console.log("creation succes");
      // hna tani ki y3oud ma yexistich dir response
      res.redirect("/");
    }
  });
};
module.exports = { createUser };
