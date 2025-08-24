import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="px-4 md:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        
        <div className="flex justify-between items-center w-full md:w-auto">
          
          <h1 className="text-2xl font-bold text-blue-600">MORENT</h1>

          
          <div className="flex items-center gap-4 md:hidden">
            <img src="/user.png" alt="user" className="w-8 h-8 rounded-full" />
            <button
              className="w-8 h-8 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/menu.png" alt="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar - Always visible */}
        <div className="relative w-full md:w-1/3">
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

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
            <img src="/Like-3.png" alt="like" className="w-10 h-10" />
          </div>
          <div className="relative w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
            <img src="/notification.png" alt="notification" className="w-7 h-7" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
            <img src="/setting-2.png" alt="settings" className="w-7 h-7" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full">
            <img src="/user.png" alt="user" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex justify-around items-center">
          <img src="/Like-3.png" alt="like" className="w-6 h-6" />
          <img src="/notification.png" alt="notification" className="w-6 h-6" />
          <img src="/setting-2.png" alt="settings" className="w-6 h-6" />
        </div>
      )}
    </nav>
  );
}
