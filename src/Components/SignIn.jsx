import React, { useState } from "react";
import { auth, provider } from "../Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router-dom"; 

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("You must enter your email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // ✅ Navigate to landing
      setTimeout(() => {
        navigate("/landing");
      }, 1200);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
  setLoading(true);
  setError("");
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      
      await getDoc(userRef, {
        fullName: user.displayName || "",
        phone: "",
        email: user.email,
        uid: user.uid,
        createdAt: new Date(),
      });
    }

    navigate("/landing");
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <div className="loader"></div>
        <p className="text-gray-600 text-sm">Logging you in...</p>
      </div>
    );
  }


  return (
    <div className="items-center bg-gray-100 min-h-screen flex flex-col justify-center">
      {/* Main Card */}
      <main className="bg-white max-auto max-w-md w-full px-8 py-10 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-1">Login</h2>
        <p className="text-sm text-gray-600 mb-6">Hi, welcome back 👋</p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded-md">
            {error}{" "}
            {error.includes("Network") && (
              <button
                onClick={handleLogin}
                className="ml-2 underline text-blue-600"
              >
                Try Again
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded-lg py-2 mb-4 hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Login with Google
            </span>
          </button>

          <div className="text-center text-sm text-gray-400">
            or Login with Email
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

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-purple-600" />
              Remember Me
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              id="submit-button"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Not registered yet?{" "}
          <a
            href="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Create an account
          </a>
        </p>
      </main>
    </div>
  );
}
