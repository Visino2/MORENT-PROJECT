import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("authUser"));

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
