// src/pages/SignUp.jsx
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../Firebase";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false); // toggle between Sign In / Sign Up
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Google sign-in
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      localStorage.setItem("authUser", JSON.stringify(user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      setErrorMsg("Failed to sign in with Google.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Email/Password (Login or Sign Up)
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (isSignUp) {
        // 🔹 Create new account
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: fullName });

        localStorage.setItem("authUser", JSON.stringify(result.user));
        navigate("/dashboard");
      } else {
        // 🔹 Login existing account
        const result = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("authUser", JSON.stringify(result.user));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Auth Error:", error.message);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 shadow-2xl rounded-2xl w-[400px]"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          {isSignUp ? "Create Account ✨" : "Welcome Back 👋"}
        </h1>

        {/* Google Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="flex items-center justify-center gap-3 bg-white border border-gray-300 px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition w-full font-medium text-gray-700 disabled:opacity-70"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <FcGoogle size={24} />
          )}
          <span>{loading ? "Loading..." : "Continue with Google"}</span>
        </motion.button>

        {/* Error Message */}
        {errorMsg && (
          <p className="mt-4 text-center text-red-500 text-sm font-medium">
            {errorMsg}
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email/Password form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Sign In"}
          </motion.button>
        </form>

        {/* Footer Toggle */}
        <p className="mt-6 text-center text-sm text-gray-500">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign in
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}
