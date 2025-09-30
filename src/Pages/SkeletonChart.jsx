import React from "react";
import SkeletonMap from "../Components/SkeletonMap";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";


export default function SkeletonChart() {
    const chartData = [
  { name: "Sport Car", value: 17439, color: "#0D3559" },
  { name: "SUV", value: 9478, color: "#175D9C" },
  { name: "Coupe", value: 18197, color: "#2185DE" },
  { name: "Hatchback", value: 12510, color: "#63A9E8" },
  { name: "MPV", value: 14406, color: "#A6CEF2" },
];
 
const totalRentals = chartData.reduce((sum, item) => sum + item.value, 0);
const darkMode = false;
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
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
      <div className="flex min-h-screen">
        
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white shadow-md p-6">
          {/* Main Menu */}
           <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">MAiN CONTENT</h3>
           <div className="w-50 h-10 bg-blue-500 rounded-lg flex gap-3 p-2 items-center animate-pulse">
             <div className="w-3 h-3 rounded-full bg-white"></div>
                <div className="h-3 w-20 bg-white rounded" ></div>
           </div>
           <div className="space-y-4 animate-pulse">
           {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="h-3 bg-blue-400 rounded-full" style={{ width: "80px" }}></div>

            </div>
          ))}
            </div>
         </div>

          {/* Preferences */}
          <div className="space-y-4 mt-10">
        <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">PREFERENCES</h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="h-3 bg-blue-400 rounded-full" style={{ width: "80px" }}></div>
            </div>
          ))}
          </div>
         </div>

          {/* Logout */}
           <div className="flex items-center space-x-2 mt-100">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="h-3 bg-blue-400 rounded-full" style={{ width: "80px" }}></div>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Large Box (Map + Details) */}
            <div className="bg-white shadow-md rounded-lg p-6 lg:col-span-2">
              {/* Title */}
              <div className="h-6 w-40 bg-blue-300 rounded-full mb-6 animate-pulse"></div>

              {/* Map */}
              <SkeletonMap />

              {/* Car details / Pick-up / Drop-off */}
              
                {/* Car Image & Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 items-center">
                  <div className="w-40 h-26 bg-white border border-gray-200 rounded-lg flex items-center justify-center mr-4 ">
                    <div className="w-30 h-20 rounded bg-gray-200 flex items-center justify-center mr-1">
                       <img 
                        src="/gallery.png" 
                        alt="gallery" 
                        className="w-10 h-10 object-contain"
                       />
                  </div>
                 </div>
                     <div>
                          <div className="h-4 bg-blue-300 rounded-full w-25 mb-2 animate-pulse"></div>
                           <div className="h-4 w-25 bg-gray-200 rounded-full mb-2 animate-pulse"></div>
                     </div>
                  <div className="h-4 bg-blue-300 rounded-full w-25 animate-pulse"></div>
                </div>

                {/* Pick-up form */}
                 <div className="mt-10 ">
                 <div className="h-4 bg-blue-300 rounded-full w-25 "></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                </div>
              </div>

                {/* Drop-off form */}
                  <div className="mt-10 ">
                 <div className="h-4 bg-blue-300 rounded-full w-25 "></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                  <div>
                    <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                  <div>
                   <div className="h-4 bg-blue-300 rounded-full w-25 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-25"></div>
                  </div>
                </div>
              </div>
              

              {/* Total Rental Price */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="h-4 w-25 bg-blue-300 rounded-full mb-2 animate-pulse"></div>
                  <div className="h-4 w-25 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="h-8 w-24 bg-blue-600 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Chart Box */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="h-4 w-40 bg-blue-300 rounded-full mb-6 animate-pulse"></div>
                 <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                     <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    dataKey="value"
                    >
                    {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                    </Pie>
                  <Tooltip formatter={(value) => [value.toLocaleString(), "Rentals"]} />
                 </PieChart>
                 </ResponsiveContainer>
                  
                <div className="text-center -mt-48 mb-32 pointer-events-none">
                  <p className="text-3xl font-bold">{totalRentals.toLocaleString()}</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Rental Car</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                        <div className="h-4 w-12 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                      <div className="h-4 w-18 bg-blue-300 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions Box */}
              <div className="bg-white shadow-md rounded-lg p-6">         
                  <div className="h-4 w-25 bg-blue-300 rounded animate-pulse mb-5"></div>
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
                        <img 
                        src="/gallery.png" 
                        alt="gallery" 
                        className="w-8 h-8 object-contain"
                       />
                  
                     <div>
                        <div className="h-4 bg-blue-300 rounded-full w-25 mb-2 animate-pulse"></div>
                        <div className="h-4 w-25 bg-gray-200 rounded-full mb-2 animate-pulse"></div>
                     </div>
                     <div>
                        <div className="h-4 bg-blue-300 rounded-full w-25 mb-2 animate-pulse"></div>
                        <div className="h-4 w-25 bg-gray-200 rounded-full mb-2 animate-pulse"></div>
                     </div>
                </div> 
                
                  ))}
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
