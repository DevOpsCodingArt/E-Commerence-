require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const connectDB = require("./config/connectdb");
const userRouter = require("./Routes/user.route");
const app = express();
const PORT_NO = process.env.PORT;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

console.log("User router loaded:", userRouter);
// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Body:`, req.body);
  next();
});

// Mount user routes
console.log("Mounting user routes at /api/user");
app.use("/api/user", userRouter);

// 404 handler
app.use((req, res, next) => {
  console.log(`404 - Not Found: ${req.method} ${req.path}`);
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Server setup
connectDB().then(() => {
  app.listen(PORT_NO, () => {
    console.log(`Server is running on port ${PORT_NO}`);
  });
});
