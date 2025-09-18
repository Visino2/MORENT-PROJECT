import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      {/* Top Row */}
      <div className="px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>

        {/* Desktop Search Bar (centered) */}
        <div className="hidden md:flex relative w-1/3 mx-6">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full border border-gray-200 rounded-lg pl-10 pr-16 py-2 text-sm focus:outline-none"
          />
          <img
            src="/search.png"
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-200 rounded-lg p-1 flex items-center justify-center">
            <img src="/filter.png" alt="filter" className="w-4 h-4" />
          </button>
        </div>

        {/* Right Section: Icons + Profile */}
        <div className="flex items-center gap-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
              <img src="/Like-3.png" alt="like" className="w-8 h-8" />
            </div>
            <div className="relative w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
              <img src="/notification.png" alt="notification" className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
              <img src="/setting-2.png" alt="settings" className="w-6 h-6" />
            </div>
          </div>

          {/* Profile */}
          <div className="relative">
            <img
              src="/user.png"
              alt="user"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <div className="flex flex-col md:hidden">
                  <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100">
                    <img src="/Like-3.png" alt="like" className="w-5 h-5" />
                    <span>Likes</span>
                  </button>
                  <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100">
                    <img src="/notification.png" alt="notification" className="w-5 h-5" />
                    <span>Notifications</span>
                  </button>
                  <button className="w-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100">
                    <img src="/setting-2.png" alt="settings" className="w-5 h-5" />
                    <span>Settings</span>
                  </button>
                </div>
                <hr className="my-2 border-gray-100" />
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Profile</button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Section */}
      <div className="px-4 md:hidden py-3 flex gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-gray-600 text-sm focus:outline-none"
          />
          <img
            src="/search.png"
            alt="search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
        </div>
        {/* Filter Icon */}
        <button className="w-12 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100">
          <img src="/filter.png" alt="filter" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
