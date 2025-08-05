// models/User.js - Defines the blueprint for the user data in the database.

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for the User model.
// This structure ensures all user documents in the database are consistent.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Mongoose 'pre-save' hook to hash the password before saving a user.
// This is a critical security measure to never store plaintext passwords.
UserSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (or is new).
  if (!this.isModified('password')) {
    next();
  }
  // Generate a salt (random string) to add complexity to the hash
  const salt = await bcrypt.genSalt(10);
  // Hash the password with the generated salt
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', UserSchema);