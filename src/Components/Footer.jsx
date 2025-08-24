import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      
      <div className="border-t border-gray-200 px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold text-blue-600 mb-4">MORENT</h1>
            <p className="text-sm text-gray-500 leading-relaxed w-60">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
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

      
      <div className="border-t border-gray-200 px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>©2022 MORENT. All rights reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}