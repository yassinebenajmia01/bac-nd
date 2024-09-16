const express = require('express');
// Import built-in JSON middleware from Express
const { signup, login, updatePassword } = require('./userController');

const userRouter = express.Router();



// Route to handle user signup
userRouter.post('/signup', signup);

// Route to handle user login
userRouter.post('/login', login);

// Route to handle password update
userRouter.post('/update-password', updatePassword);

// Error handling middleware should be defined in the main app file
// (Not included in this snippet but should be in your main app setup)

module.exports = userRouter;