import React, { useState } from "react";
import { MdOutlinePerson2 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Registration submitted!");
  };

  const handleGoogleSignup = () => {
    alert("Google signup clicked!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Registration Card */}
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-red-400 shadow-lg">
              <span className="text-2xl text-white">
                <MdOutlinePerson2 size={40} />
              </span>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              Create your account
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  First Name *
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                      👤
                    </span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3 pr-4 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                    placeholder="First name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Last Name *
                </label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                      👤
                    </span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-3 pr-4 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                    📧
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-4 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Password *
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                    🔑
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-14 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 transition-colors hover:text-red-500"
                >
                  <span className="text-lg">{showPassword ? "🙈" : "👁️"}</span>
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Confirm Password *
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                    🔐
                  </span>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-14 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 transition-colors hover:text-red-500"
                >
                  <span className="text-lg">
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </span>
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full transform rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 focus:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Creating Account...
                </div>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                className="font-semibold text-red-500 transition-colors hover:text-red-600"
                onClick={() => navigate("/login")}
              >
                Sign In
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm font-medium text-gray-500">
              Or continue with social account
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="group flex w-full items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-4 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300/20 focus:outline-none"
          >
            <span className="mr-3 text-xl transition-transform group-hover:scale-110">
              <FcGoogle />
            </span>
            SIGN UP WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}
