import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";

export default function PublicRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

   if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">
        <div className="loader"></div>
        <p className="text-gray-600 text-sm">Logging you in...</p>
      </div>
    );
  }


  // ✅ If logged in, go to Landing page
  if (user) return <Navigate to="/landing" replace />;

  return children;
}
    // if (user) return <Navigate to="/signin" replace />;