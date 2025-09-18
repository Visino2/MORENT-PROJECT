import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      {/* Top Section */}
      <div className="border-t border-gray-200 px-6 py-12">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          
          {/* Brand + Vision */}
          <div className="text-center md:text-left md:w-1/3">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">MORENT</h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-center md:flex md:flex-row md:gap-24 md:text-left">
            
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 px-6 py-6 text-sm text-gray-600">
        {/* Mobile: policies left/right, copyright centered */}
        <div className="flex justify-between mb-4 md:hidden">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
        <p className="text-center text-gray-500 mb-4 md:mb-0 md:hidden">
          © 2022 MORENT. All rights reserved
        </p>

        {/* Desktop: copyright left, policies right */}
        <div className="hidden md:flex md:justify-between md:items-center text-gray-400">
          <p>© 2022 MORENT. All rights reserved</p>
          <div className="flex gap-6">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
