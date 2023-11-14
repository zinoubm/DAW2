// CREATE -----------
const { json } = require("express");
const User = require("../models/Utilisateur");
const Admin = require("../models/Admin");
const Doctor = require("../models/Medecin");
const Patient = require("../models/Patient");

const roleEnum = {
  ADMIN: "ADMIN",
  DOCTOR: "DOCTOR",
  PATIENT: "PATIENT",
};

const createUser = async (userBaseInfo) => {
  try {
    const newUser = new User(userBaseInfo);
    await newUser.save();

    return newUser._id.toString();
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

const createAdmin = async (userBaseInfo, adminInfo) => {
  try {
    const newAdmin = new Admin(adminInfo);
    await newAdmin.save();

    const userId = await createUser({
      ...userBaseInfo,
      role: roleEnum.ADMIN,
      role_info: newAdmin.toString(),
    });
    return userId;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

const createDoctor = async (userBaseInfo, doctorInfo) => {
  try {
    const newDoctor = new Doctor(doctorInfo);
    await newDoctor.save();

    const userId = await createUser({
      ...userBaseInfo,
      role: roleEnum.DOCTOR,
      role_info: newDoctor.toString(),
    });
    return userId;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

const createPatient = async (userBaseInfo, patientInfo) => {
  try {
    const newPatient = new Patient(patientInfo);
    await newPatient.save();

    const userId = await createUser({
      ...userBaseInfo,
      role: roleEnum.PATIENT,
      role_info: newPatient.toString(),
    });
    return userId;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

const getUserByEmail = async (emailU) => {
  try {
    const user = await User.findOne({ email: emailU });
    return user._id;
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
  }
};

// // getUser(userId) -> object (info about user)
// let getUser = async (uId) => {
//   return await u.findOne({ _id: uId }).then((userInfo) => {
//     return userInfo;
//   });
// };
// // getUsers() -> [object] (array of objects containing user Info)
// let getUsers = async () => {
//   return await u.find().then((usersInfo) => {
//     return usersInfo;
//   });
// };
// // getAdmins() -> [object] (array of objects containing admin Info)
// let getAdmins = async () => {
//   return await adm.find().then((adminsInfo) => {
//     return adminsInfo;
//   });
// };
// // getDoctors() -> [object] (array of objects containing doctor Info)
// let getDoctors = async () => {
//   return await doc.find().then((doctorsInfo) => {
//     return doctorsInfo;
//   });
// };
// // getPatients() -> [object] (array of objects containing patient Info)
// let getPatients = async () => {
//   return await pat.find().then((patientsInfo) => {
//     return patientsInfo;
//   });
// };
// // isAdmin(userId) -> boolean
// let isAdmin = async (userId) => {
//   return getUser(userId).then((r) => {
//     if (r.role == role.a) {
//       check = true;
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
// // isDoctor(userId) -> boolean
// let isDoctor = async (userId) => {
//   return getUser(userId).then((r) => {
//     if (r.role == role.d) {
//       check = true;
//       return true;
//     } else {
//       return false;
//     }
//   });
// };
// // isPatient(userId) -> boolean
// let isPatien = async (userId) => {
//   return getUser(userId).then((r) => {
//     if (r.role == role.p) {
//       check = true;
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

// //########################### UPDATE ###########################
// // updateUser(newUserBaseInfo) -> userId
// let updateUser = async (uId, newUserBaseInfo) => {
//   await u.updateOne({ _id: uId }, newUserBaseInfo);
// };
// // updateAdmin(newAdminInfo) -> userId
// let updateAdmin = async (uId, adminInfo) => {
//   await adm.updateOne({ userId: uId }, adminInfo);
// };
// // updateDoctor(newDoctorInfo) -> userId
// let updateDoctor = async (uId, newDoctorInfo) => {
//   await doc.updateOne({ userId: uId }, newDoctorInfo);
// };
// // updatePatient(newPatientInfo) -> userId
// let updatePatient = async (uId, newPatientInfo) => {
//   await pat.updateOne({ userId: uId }, newPatientInfo);
// };

// //################################ DELETE ################################
// // deleteUser(userId) -> userId
// let deleteUser = async (uId) => {
//   await getUser(uId).then((r) => {
//     switch (r.role) {
//       case role.a:
//         console.log("he is an admin");
//         let deleteA = async () => {
//           await adm.deleteOne({ userId: uId });
//         };
//         deleteA();
//         break;
//       case role.d:
//         let deleteD = async () => {
//           await doc.deleteOne({ userId: uId });
//         };
//         deleteD();
//         break;
//       case role.p:
//         let deleteP = async () => {
//           await pat.deleteOne({ userId: uId });
//         };
//         deleteP();
//         break;
//     }
//   });
//   await u.deleteOne({ _id: uId });
// };
module.exports = {
  createUser,
  getUserByEmail,
  createAdmin,
  // updateAdmin,
  createDoctor,
  createPatient,
  // getUser,
  // getUsers,
  // getAdmins,
  // getDoctors,
  // getPatients,
  // isAdmin,
  // isDoctor,
  // isPatien,
  // updateUser,
  // updateDoctor,
  // updatePatient,
  // deleteUser,
  // role,
};
