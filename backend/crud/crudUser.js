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

    if (user) {
      return user._id;
    } else {
      console.log(`User with email ${emailU} not found`);
      return null; // or whatever value you want to return in case of no user
    }
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
  }
};

let getUser = async (uId) => {
  return await User.findOne({ _id: uId }).then((userInfo) => {
    return userInfo;
  });
};

let getUsers = async () => {
  return await User.find().then((usersInfo) => {
    return usersInfo;
  });
};

let getAdmins = async () => {
  return await Admin.find().then((adminsInfo) => {
    return adminsInfo;
  });
};

let getDoctors = async () => {
  return await Doctor.find().then((doctorsInfo) => {
    return doctorsInfo;
  });
};

let getPatients = async () => {
  return await Patient.find().then((patientsInfo) => {
    return patientsInfo;
  });
};

let isAdmin = async (userId) => {
  return getUser(userId).then((r) => {
    if (r.role == roleEnum.ADMIN) {
      check = true;
      return true;
    } else {
      return false;
    }
  });
};

let isDoctor = async (userId) => {
  return getUser(userId).then((r) => {
    if (r.role == roleEnum.DOCTOR) {
      check = true;
      return true;
    } else {
      return false;
    }
  });
};

let isPatien = async (userId) => {
  return getUser(userId).then((r) => {
    if (r.role == roleEnum.PATIENT) {
      check = true;
      return true;
    } else {
      return false;
    }
  });
};

let updateUser = async (uId, newUserBaseInfo) => {
  await User.updateOne({ _id: uId }, newUserBaseInfo);
};

let updateAdmin = async (uId, adminInfo) => {
  await Admin.updateOne({ userId: uId }, adminInfo);
};

let updateDoctor = async (uId, newDoctorInfo) => {
  await Doctor.updateOne({ userId: uId }, newDoctorInfo);
};

let updatePatient = async (uId, newPatientInfo) => {
  await Patient.updateOne({ userId: uId }, newPatientInfo);
};

let deleteUser = async (uId) => {
  await getUser(uId).then((r) => {
    switch (r.role) {
      case roleEnum.ADMIN:
        console.log("he is an admin");
        let deleteA = async () => {
          await Admin.deleteOne({ userId: uId });
        };
        deleteA();
        break;
      case roleEnum.DOCTOR:
        let deleteD = async () => {
          await Doctor.deleteOne({ userId: uId });
        };
        deleteD();
        break;
      case roleEnum.PATIENT:
        let deleteP = async () => {
          await Patient.deleteOne({ userId: uId });
        };
        deleteP();
        break;
    }
  });
  await User.deleteOne({ _id: uId });
};

module.exports = {
  createUser,
  getUserByEmail,
  createAdmin,
  updateAdmin,
  createDoctor,
  createPatient,
  getUser,
  getUsers,
  getAdmins,
  getDoctors,
  getPatients,
  isAdmin,
  isDoctor,
  isPatien,
  updateUser,
  updateDoctor,
  updatePatient,
  deleteUser,
  roleEnum,
};
