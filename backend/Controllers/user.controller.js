const bcrypt = require("bcryptjs");
const verifyEmailTemplate = require("../Utils/verifyEmailTemplate");
const jwt = require("jsonwebtoken");
const sendEmailFun = require("../config/sendEmailFun");
const UserModel = require("../Models/user-model");

console.log("entered");
const registerUserController = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    let user;

    if (!name || !email || !password) {
      return response.status(400).json({
        message: "Please provide email, name, and password",
        error: true,
        success: false,
      });
    }

    user = await UserModel.findOne({ email: email });

    if (user) {
      return response.json({
        message: "User ALready Exist",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    user = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await user.save();
    // Send verification email
    const verifyEmail = await sendEmailFun({
      sendTo: email,
      subject: "Verify email from E Commerence",
      text: "",
      html: verifyEmailTemplate(name, verifyCode),
    });
    // Create a JWT token for verification purposes
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );
    return response.status(201).json({
      success: true,
      error: false,
      message: "User registered successfully! Please verify your email.",
      token: token,
    });
    // const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`;
    // const verifyEmail = await sendEmail({
    //   sendTo: email,
    //   subject: "Verify email from binkeyit",
    //   html: verifyEmailTemplate({
    //     name,
    //     url: verifyUrl
    //   })
    // });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = { registerUserController };
