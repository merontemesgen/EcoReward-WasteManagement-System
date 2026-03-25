"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { authAPI } from "../../api";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });

      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      // Redirect based on user role
      if (response.user?.userType === "collector") {
        router.push("/collector/dashboard");
      } else if (response.user?.userType === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard/citizen");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder: integrate with Google OAuth
    window.location.href = "/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-green-800 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl flex rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side — Photo */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="/assets/login-photo.jpg"
            alt="Waste collector"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side — Form Card */}
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Log In</h1>
            <p className="text-gray-500 mt-1">
              Welcome to EcoReward{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Example@gmail.com"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition text-gray-900 placeholder-gray-400 text-sm"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition text-gray-900 placeholder-gray-400 text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              {/* Forgot Password — right aligned under field */}
              <div className="text-right mt-1">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:text-green-700 hover:underline"
                >
                  forgot password?
                </Link>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition duration-200 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-gray-50 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                  fill="#4285F4"
                />
                <path
                  d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                  fill="#34A853"
                />
                <path
                  d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                  fill="#FBBC05"
                />
                <path
                  d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                  fill="#EA4335"
                />
              </g>
            </svg>
            Google
          </button>

          {/* Footer */}
          <p className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-gray-900 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
