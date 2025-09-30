import React from "react";

export default function SkeletonMap() {
  return (
    <div className="h-64 bg-gray-100 rounded-lg mb-6 relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none"></div>

      <svg
        className="absolute inset-0 w-full h-full animate-pulse"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gray background */}
        <rect width="600" height="400" fill="#E5E7EB" />

        
        <path
          d="M0 120 L600 140 L600 180 L0 160 Z"
          fill="#ffffff"
        />
        <path
          d="M200 0 L240 0 L300 400 L260 400 Z"
          fill="#ffffff"
        />
        <path
          d="M0 260 L600 300 L600 340 L0 300 Z"
          fill="#ffffff"
        />

        {/* Blue blocks (landmarks/areas) */}
        <rect x="100" y="50" width="120" height="100" fill="#3B82F6" />
        <polygon points="220,200 260,180 300,240 260,280 220,260" fill="#3B82F6" />

        {/* Blue curved road */}
        <path
          d="M 100 280 C 200 250, 400 350, 600 280"
          stroke="#3B82F6"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}