import React from "react"
import { motion } from "framer-motion";

export default function SkeletonLoader() {
return (
<div className="min-h-screen bg-gray-50 animate-pulse">
    <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
                <div className="h-5 bg-blue-400 rounded w-20 animate-pulse"></div>
                <div className="flex-1 mx-8 relative max-w-md">
                    <div className="bg-gray-100 rounded-full w-full h-[44px] animate-pulse flex items-center px-4 space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="h-2 bg-gray-300 rounded animate-pulse flex-1 max-w-[100px]"></div>
                    </div>
                </div>
                 <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse">
                            <img src="/Like-3.png" alt="like" className="w-8 h-8" />
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
                            <img src="/notification.png" alt="notification" className="w-6 h-6" /> 
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
                            <img src="/setting-2.png" alt="settings" className="w-6 h-6" />
                        </div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
                            <img src="/profile.png" alt="profile" className="w-6 h-6" />
                        </div>
     </div>
 </div>
<div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="bg-white rounded-lg shadow-sm p-6">
           <div className="space-y-8">
            {/* Billing Info Section */}
            <div>
             <div className="flex justify-between items-center mb-4">
                  <div className="gap-3 flex flex-col">
                  <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-25"></div>
                  </div>
                  <span className="text-sm text-gray-500">Step 1 of 4</span>
                 
             </div>
      
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div>
                  <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                </div>
                <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div  className="bg-white rounded-lg shadow-sm p-6 mt-10">
                  {/* Rental Info Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                  <div className="gap-3 flex flex-col">
                  <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-25"></div>
                  </div>
                  <span className="text-sm text-gray-500">Step 2 of 4</span>
                 
             </div>
              
              {/* Pick-Up */}
              <div className="mb-6 ">
                 <div className="h-4 bg-blue-300 rounded-full w-25 "></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Drop-Off */}
               <div className="mb-6 ">
                 <div className="h-4 bg-blue-300 rounded-full w-25 "></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           <div  className="bg-white rounded-lg shadow-sm p-6 mt-10">
                  {/* Payment Method Section */}
            <div>
                 <div className="flex justify-between items-center mb-4">
                  <div className="gap-3 flex flex-col">
                  <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-25"></div>
                  </div>
                  <span className="text-sm text-gray-500">Step 3 of 4</span>
                 
                   </div>
              
              {/* Credit Card */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-white border border-gray-400 rounded-full mr-2"></div>
                    <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  </div>
                  <div className="h-4 bg-white rounded-full w-25"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-[#EFF3FD] rounded border border-[#EFF3FD]"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-[#EFF3FD] rounded border border-[#EFF3FD]"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-[#EFF3FD] rounded border border-[#EFF3FD]"></div>
                  </div>
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-10 bg-[#EFF3FD] rounded border border-[#EFF3FD]"></div>
                  </div>
                </div>
              </div>

              {/* PayPal */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-100 border border-gray-400 rounded-full mr-2"></div>
                    <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  </div>
                  <div className="h-4 bg-white rounded-full w-25"></div>
                </div>
              </div>

              {/* Bitcoin */}
               <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-100 border border-gray-400 rounded-full mr-2"></div>
                    <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  </div>
                  <div className="h-4 bg-white rounded-full w-25"></div>
                </div>
              </div>
            </div>
           </div>

           <div  className="bg-white rounded-lg shadow-sm p-6 mt-10">
                  {/* Confirmation Section */}
            <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="gap-3 flex flex-col">
                  <div className="h-4 bg-blue-300 rounded-full w-25"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-25"></div>
                  </div>
                  <span className="text-sm text-gray-500">Step 4 of 4</span>
                 
             </div>
              
              <div className="space-y-4">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg gap-3">
                  <input type="checkbox" className="shadow-black flex " />
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-1"></div>
                 </div>
                
                 <div className="flex items-start bg-gray-50 p-4 rounded-lg gap-3">
                  <input type="checkbox" className="shadow-black flex " />
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-1"></div>
                 </div>
              </div>
            </div>

            {/* Rent Now Button */}
            <div className="h-12 bg-blue-500 rounded-lg mt-5 w-30"></div>

            {/* Security Badge */}
          <div className="flex flex-col gap-3 mt-10">
              <div className="h-4 bg-blue-300 rounded-full w-25"></div>
              <div className="h-4 bg-gray-200 rounded-full w-25"></div>
          </div>
           </div>
      </div>

      {/* Right Column - Rental Summary Skeleton */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
          <div className="h-4 bg-blue-300 rounded-full w-32 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full w-32 mb-4"></div>
          
          <div className="flex items-center mb-6">
             <div className="flex items-center">
             <div className="w-20 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center mr-4 ">
              <div className="w-16 h-12 rounded bg-gray-200 flex items-center justify-center mr-1">
               <img 
               src="/gallery.png" 
               alt="gallery" 
               className="w-10 h-10 object-contain"
               />
              </div>
            </div>
        </div>
              <div className="flex flex-col items-center gap-2">
                <div className="h-3 bg-blue-300 rounded-full w-20 "></div>
                <div className="h-3 bg-gray-200 rounded-full w-20"></div>
              </div>
          </div>

          <div className="space-y-3 mb-6 border-t pt-4">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded-full w-20"></div>
              <div className="h-4 bg-blue-300 rounded-full w-20"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded-full w-20"></div>
              <div className="h-4 bg-blue-300 rounded-full w-20"></div>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="mb-6">
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-gray-100 rounded-lg"></div>
              <div className="h-10 bg-gray-200 rounded-lg w-20"></div>
            </div>
          </div>

          <div className="border-t pt-4 flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="h-3 bg-blue-300 rounded w-24"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
             <div className="text-right">
                <div className="h-8 bg-blue-300 rounded w-16 mb-1"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
           {/* Footer Skeleton */}
            <footer className="bg-white border-t border-gray-200 mt-16 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col gap-12 md:flex-row md:justify-between">
                        {/* Logo and description skeleton */}
                        <div className="space-y-2">
                            <div className="h-3 bg-blue-300 rounded-md w-20 animate-pulse"></div>
                            <div className="h-3 bg-gray-300 rounded-md w-20 animate-pulse"></div>
                        </div>
                        
                        {/* Footer columns skeleton */}
                        <div className="grid grid-cols-2 gap-8 text-center md:flex md:flex-row md:gap-24 md:text-left">
                            {[1, 2, 3].map((col) => (
                                <div key={col} className="space-y-4">
                                    <div className="h-3 bg-blue-400 rounded-md w-20 animate-pulse"></div>
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-3 bg-gray-300 rounded-md w-20 animate-pulse"></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Copyright skeleton */}
                    <div className="border-t border-gray-200 mt-8 pt-4">
                        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                            <div className="h-3 bg-blue-300 rounded w-20 animate-pulse"></div>
                            <div className="flex space-x-10">
                                <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
                                <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
       </div>


);
}

