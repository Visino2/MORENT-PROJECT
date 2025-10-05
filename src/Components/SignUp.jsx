import React, { useState } from "react";
import { auth, provider, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  // Email + Password Signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !password) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: fullName });

      await setDoc(doc(db, "users", result.user.uid), {
        fullName,
        phone,
        email,
        uid: result.user.uid,
        createdAt: new Date(),
      });

      // ✅ Navigate to landing instead of reload
      setTimeout(() => {
        navigate("/landing");
      }, 2000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Google Sign Up
  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          fullName: user.displayName || "",
          phone: "",
          email: user.email,
          uid: user.uid,
          createdAt: new Date(),
        });
      }

      // ✅ Navigate properly
      setTimeout(() => {
        navigate("/landing");
      }, 1200);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Loader view
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <div className="loader"></div>
        <p className="text-gray-600 text-sm">Creating your account...</p>
      </div>
    );
  }

  return (
    <div className="items-center bg-gray-100 min-h-screen flex flex-col justify-center">
      {/* Main Card */}
      <main className="bg-white max-auto max-w-md w-full px-8 py-10 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-1">Create Account</h2>
        <p className="text-sm text-gray-600 mb-6">Join us today 🚀</p>

        {/* Error message */}
        {error && (
          <div className="mb-4 text-center">
            <p className="text-red-500 text-sm mb-2">{error}</p>
            <button
              onClick={() => setError("")}
              className="text-blue-600 text-sm underline"
            >
              Try Again
            </button>
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-6">
          {/* Google Sign Up */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded-lg py-2 mb-4 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Sign Up with Google
            </span>
          </button>

          <div className="text-center text-sm text-gray-400">
            or Sign Up with Email
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Victor Aba"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="+234 812 345 6789"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="victor@gmail.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[37px] text-sm text-gray-400 cursor-pointer select-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </main>
    </div>
  );
}
