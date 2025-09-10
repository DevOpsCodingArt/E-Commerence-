import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import ForgotEmailDialog from "../../Dialog/ForgotEmailDialog";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    alert("Login submitted!");
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      {/* Login Card */}
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 to-red-400 shadow-lg">
              <span className="text-2xl text-white">🔒</span>
            </div>
            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              Login to your account
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Email Id *
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                    📧
                  </span>
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-4 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="group relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span className="text-lg text-gray-400 transition-colors group-focus-within:text-red-500">
                    🔑
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 py-4 pr-14 pl-12 text-gray-900 placeholder-gray-500 transition-all duration-200 hover:bg-gray-50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                  placeholder="Enter your password"
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

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-gray-600 transition-colors hover:text-red-500"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSubmit}
              className="w-full transform rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-4 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-red-500/20 focus:ring-offset-2 focus:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Signing In...
                </div>
              ) : (
                "LOGIN"
              )}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Not Registered?{" "}
              <button
                className="font-semibold text-red-500 transition-colors hover:text-red-600"
                onClick={() => navigate("/register")}
              >
                Sign Up
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

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="group flex w-full items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-4 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300/20 focus:outline-none"
          >
            <span className="mr-3 text-xl transition-transform group-hover:scale-110">
              <FcGoogle />
            </span>
            LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
      <ForgotEmailDialog open={open} setOpen={setOpen}></ForgotEmailDialog>
    </div>
  );
}
