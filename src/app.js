// Load environment variables if needed
// require('dotenv').config();

const express = require('express');
const cors = require('cors');
const api = require('./routes/api'); // Adjust path if needed
const userRouter= require("./routes/user/userRouter")
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use("/user",userRouter)
// Route setup
app.use('/v1', api); // Define your routes

module.exports = app;