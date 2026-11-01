
const express = require("express");
const path = require("path");
const { validateRegistration } = require("../utils/validation");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/register", (req, res) => {
  const errors = validateRegistration(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: "Registration failed. Please correct the highlighted fields.",
      errors
    });
  }

  // Practical demonstration only; no registration data is stored.
  return res.status(201).json({
    success: true,
    message: "Registration validated successfully! Your hackathon team is ready."
  });
});

module.exports = router;
