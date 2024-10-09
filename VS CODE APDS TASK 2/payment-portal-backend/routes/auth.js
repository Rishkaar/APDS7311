const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  const { fullName, idNumber, accountNumber, password } = req.body;

  // Input validation using Regex
  if (!/^[a-zA-Z\s]+$/.test(fullName) || !/^\d+$/.test(idNumber)) {
    return res.status(400).json({ msg: "Invalid input format." });
  }

  try {
    let user = await User.findOne({ accountNumber });
    if (user) return res.status(400).json({ msg: "User already exists" });

    user = new User({ fullName, idNumber, accountNumber, password });
    await user.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { accountNumber, password } = req.body;
  try {
    const user = await User.findOne({ accountNumber });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
