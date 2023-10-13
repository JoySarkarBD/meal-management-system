const express = require("express");
const { loginController } = require("../controllers/loginController");
const {
  validateDataResult,
  loginValidationRules,
} = require("../middlewares/validationMiddleware");
const router = express.Router();

// Get all users (Open for all) ✔
router.get("/login", loginValidationRules, validateDataResult, loginController);

module.exports = router;
