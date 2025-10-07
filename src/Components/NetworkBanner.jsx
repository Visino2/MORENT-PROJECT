import React, { useEffect, useState } from "react";

export default function NetworkBanner() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  if (isOnline) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white flex items-center justify-between px-4 py-3 text-sm shadow-md z-50">
      <span>⚠️ Network issue detected. Check your connection.</span>
      <button
        onClick={handleRetry}
        className="bg-white text-red-600 px-5 py-2 rounded font-semibold hover:bg-gray-100 transition"
      >
        Try Again
      </button>
    </div>
  );
}
