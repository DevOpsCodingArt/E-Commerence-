const express = require("express");
const userRouter = express.Router();
const { registerUserController } = require("../Controllers/user.controller");

console.log("Setting up user routes...");

// Add explicit path logging
userRouter.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to: ${req.originalUrl}`);
  next();
});

// Keep your existing route but add logging
userRouter.post("/register", (req, res, next) => {
  console.log("Register route hit");
  registerUserController(req, res, next);
});

console.log("User routes configured");

module.exports = userRouter;
