import React, { useState, useRef, useEffect } from "react";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

/**
 * OTP Verification Component
 * Handles 6-digit OTP input, verification, and resend functionality
 */
export default function OTPVerify() {
  // State for managing OTP digits, verification status, loading state and resend timer
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Refs for managing input field focus
  const inputRefs = useRef([]);

  // Timer countdown effect for OTP resend cooldown
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  /**
   * Handles input change in OTP fields
   * @param {HTMLElement} element - Input element
   * @param {number} index - Index of the input field
   */
  const handleChange = (element, index) => {
    const value = element.value;
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  /**
   * Handles backspace key for OTP input navigation
   * @param {KeyboardEvent} e - Keyboard event
   * @param {number} index - Current input field index
   */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  /**
   * Handles paste event for OTP input
   * Automatically distributes pasted numbers across input fields
   * @param {ClipboardEvent} e - Clipboard event
   */
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];

    pastedData.forEach((char, index) => {
      if (index < 6 && /^\d$/.test(char)) {
        newOtp[index] = char;
      }
    });

    setOtp(newOtp);

    // Focus on the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((val) => val === "");
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  /**
   * Handles OTP verification
   * Simulates API call with a 2-second delay
   */
  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For demo purposes, accept any 6-digit code
    setIsVerified(true);
    setIsLoading(false);
  };

  /**
   * Handles OTP resend functionality
   * Resets OTP fields and starts resend timer
   */
  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setResendTimer(60);
    setIsVerified(false);
    inputRefs.current[0]?.focus();
  };

  /**
   * Resets the verification form to initial state
   */
  const reset = () => {
    setOtp(["", "", "", "", "", ""]);
    setIsVerified(false);
    setIsLoading(false);
    inputRefs.current[0]?.focus();
  };

  // Render success state if OTP is verified
  if (isVerified) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
            <FaLock className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 text-2xl font-semibold text-gray-800">
            Verification Successful
          </h1>
          <p className="mb-6 text-gray-600">
            Your OTP has been verified successfully.
          </p>
          <button
            onClick={reset}
            className="w-full rounded-xl bg-red-500 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
          >
            Verify Another
          </button>
        </div>
      </div>
    );
  }

  // Render OTP input form
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500">
          <FaLock className="h-8 w-8 text-white" />
        </div>

        {/* Header */}
        <h1 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Enter Verification Code
        </h1>

        {/* Description */}
        <p className="mb-8 text-center text-gray-600">
          We've sent a 6-digit verification code to your phone
        </p>

        {/* OTP Input */}
        <div className="mb-8 flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="h-12 w-12 rounded-lg border border-gray-300 bg-gray-50 text-center text-lg font-medium text-gray-800 transition-all duration-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
              placeholder="0"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={otp.join("").length !== 6 || isLoading}
          className={`w-full rounded-xl py-3 font-medium text-white transition-all duration-200 ${
            otp.join("").length === 6 && !isLoading
              ? "bg-red-500 hover:bg-red-600"
              : "cursor-not-allowed bg-gray-300"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              VERIFYING...
            </div>
          ) : (
            "VERIFY"
          )}
        </button>

        {/* Resend Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            {resendTimer > 0 ? (
              <span className="text-gray-500">Resend in {resendTimer}s</span>
            ) : (
              <button
                onClick={handleResend}
                className="font-medium text-red-500 transition-colors duration-200 hover:text-red-600"
              >
                Resend Code
              </button>
            )}
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Or continue with social account
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 transition-colors duration-200 hover:bg-gray-50">
            <FcGoogle className="h-5 w-5" />
            <span className="font-medium text-gray-700">LOGIN WITH GOOGLE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
