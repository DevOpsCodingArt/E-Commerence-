const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) {
      throw new Error("MONGODB_URL is not defined in environment variables");
    }

    await mongoose.connect(MONGODB_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDB;
