// server.js - This is the entry point for the backend server.

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Import authentication routes for user login and registration
const authRoutes = require('./routes/authRoutes');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON payloads from requests
// This allows us to access data sent in the body of a POST request
app.use(express.json());

// --- Database Connection ---
// Use Mongoose to connect to the MongoDB database using the URI from the .env file.
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- API Routes ---
// Use the authentication routes for all requests starting with '/api/auth'
app.use('/api/auth', authRoutes);

// Basic test route to ensure the server is running
app.get('/', (req, res) => {
  res.send('Culinary Compass Server is running!');
});

// --- Server Startup ---
// Start the server and make it listen for requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});