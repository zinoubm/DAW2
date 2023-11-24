const userFunc =require("../crud/crudUser");
const findUnacceptedUserControlle=async (req,res)=>{
    userFunc.findUnacceptedUser().then((r)=>{
        res.json(r);
    })
}
const acceptUserControlle=async (req,res)=>{
    idUser=req.params.idUser;
    userFunc.updateUser(idUser,{is_accepte:true});
    res.json({success:true});
}
module.exports={
    findUnacceptedUserControlle,
    acceptUserControlle
}