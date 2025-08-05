// routes/authRoutes.js - Handles all user authentication API endpoints.

const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// --- User Registration Route ---
// @route   POST /api/auth/register
// @desc    Register a new user and return a JWT
// @access  Public
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance. The password will be hashed by the pre-save hook.
    user = new User({
      username,
      email,
      password,
    });

    await user.save();

    // Create the JWT payload, which contains user information (in this case, their ID)
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign the token with the JWT secret and set an expiration time
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 }, // 1 hour in milliseconds
      (err, token) => {
        if (err) throw err;
        // Send the token back to the client
        res.json({ token });
      }
    );
  } catch (err) {
    // This catches any errors during the database or JWT creation process
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// --- User Login Route ---
// @route   POST /api/auth/login
// @desc    Authenticate a user and get a JWT
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by their email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare the provided plaintext password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and sign a new token, just like in the registration route
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;