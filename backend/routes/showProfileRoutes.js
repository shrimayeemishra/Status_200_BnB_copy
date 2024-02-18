/** @format */
const User = require("../models/userModel");
const express = require("express");
const router = express.Router();

// GET all doctors
router.get("/", async (req, res) => {
  const user = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(user);
});

//GET a single doctor
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ error: "No such doctor found" });
  }

  res.status(200).json(user);
});

module.exports = router;
