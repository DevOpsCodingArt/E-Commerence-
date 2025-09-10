import React, { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";

export default function ResetPassword() {
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Password validation rules
  const passwordRules = [
    {
      rule: "minLength",
      text: "At least 8 characters",
      test: (pwd) => pwd.length >= 8,
    },
    {
      rule: "uppercase",
      text: "One uppercase letter",
      test: (pwd) => /[A-Z]/.test(pwd),
    },
    {
      rule: "lowercase",
      text: "One lowercase letter",
      test: (pwd) => /[a-z]/.test(pwd),
    },
    { rule: "number", text: "One number", test: (pwd) => /\d/.test(pwd) },
    {
      rule: "special",
      text: "One special character",
      test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    },
  ];

  const validatePassword = (password) => {
    return passwordRules.map((rule) => ({
      ...rule,
      valid: rule.test(password),
    }));
  };

  const handleInputChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async () => {
    // Validate passwords
    const newErrors = {};

    if (!passwords.newPassword) {
      newErrors.newPassword = "New password is required";
    } else {
      const validationResults = validatePassword(passwords.newPassword);
      const hasInvalidRules = validationResults.some((rule) => !rule.valid);
      if (hasInvalidRules) {
        newErrors.newPassword = "Password does not meet requirements";
      }
    }

    if (!passwords.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (passwords.newPassword !== passwords.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSuccess(true);
    setIsLoading(false);
  };

  const resetForm = () => {
    setPasswords({ newPassword: "", confirmPassword: "" });
    setIsSuccess(false);
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500">
            <FaCheck className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-4 text-2xl font-semibold text-gray-800">
            Password Reset Successful
          </h1>
          <p className="mb-6 text-gray-600">
            Your password has been successfully updated. You can now login with
            your new password.
          </p>

          <button
            onClick={() => (window.location.href = "/login")}
            className="mb-4 w-full rounded-xl bg-red-500 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-600"
          >
            GO TO LOGIN
          </button>
        </div>
      </div>
    );
  }

  const passwordValidation = validatePassword(passwords.newPassword);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500">
          <FaLock className="h-8 w-8 text-white" />
        </div>

        {/* Header */}
        <h1 className="mb-2 text-center text-2xl font-semibold text-gray-800">
          Reset Your Password
        </h1>

        <p className="mb-8 text-center text-gray-600">
          Enter your new password below
        </p>

        <div className="space-y-6">
          {/* New Password Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword.newPassword ? "text" : "password"}
                value={passwords.newPassword}
                onChange={(e) =>
                  handleInputChange("newPassword", e.target.value)
                }
                placeholder="Enter your new password"
                className={`w-full rounded-lg border py-3 pr-10 pl-10 transition-all duration-200 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                  errors.newPassword
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-500"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.newPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {errors.newPassword && (
              <p className="mt-2 text-sm text-red-600">{errors.newPassword}</p>
            )}
          </div>

          {/* Password Requirements */}
          {passwords.newPassword && (
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 text-sm font-medium text-gray-700">
                Password Requirements:
              </h3>
              <ul className="space-y-1">
                {passwordValidation.map((rule, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    {rule.valid ? (
                      <FaCheck className="h-4 w-4 text-green-500" />
                    ) : (
                      <FaTimes className="h-4 w-4 text-red-500" />
                    )}
                    <span
                      className={rule.valid ? "text-green-600" : "text-red-600"}
                    >
                      {rule.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Confirm Password Field */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                value={passwords.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm your new password"
                className={`w-full rounded-lg border py-3 pr-10 pl-10 transition-all duration-200 focus:ring-2 focus:ring-red-500/20 focus:outline-none ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300 focus:border-red-500"
                }`}
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword.confirmPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full rounded-xl py-3 font-medium text-white transition-all duration-200 ${
              isLoading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                UPDATING PASSWORD...
              </div>
            ) : (
              "UPDATE PASSWORD"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <button
              onClick={() => (window.location.href = "/login")}
              className="font-medium text-red-500 transition-colors duration-200 hover:text-red-600"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
