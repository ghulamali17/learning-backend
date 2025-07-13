const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
  getAllUsers,
  createAUser,
  getUserByID,
  updateUser,
  deleteUser,
} = require("../controllers/user");


// create user
router.post("/", createAUser);

//get all users
router.get("/", getAllUsers);

//get user by ID
router.get("/:id", getUserByID);

// update user (patch)
router.patch("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

module.exports = router;
