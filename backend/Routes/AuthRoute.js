const express = require('express');
const router = express.Router();

const { Signup, Login } = require('../util/AuthController');
const { userVerification } = require('../middlewares/AuthMiddleware');

// Route for user signup
router.post('/signup', Signup);

// Route for user login
router.post('/login', Login);

// Protected route example using user verification middleware
router.post('/', userVerification, (req, res) => {
  // You can add functionality here for the verified user
  res.status(200).json({ message: "User verified successfully" });
});

module.exports = router;
