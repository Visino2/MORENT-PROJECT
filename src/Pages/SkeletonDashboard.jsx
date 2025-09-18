import React from "react";

export default function SkeletonDashboard() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar Skeleton */}
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

            <div className="flex">
                {/* Sidebar Skeleton */}
            <aside className="hidden lg:block w-64 p-6 space-y-8 bg-white border-r border-gray-200">
      
          <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">TYPE</h3>
           <div className="space-y-2">
           {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="h-3 bg-blue-400 rounded" style={{ width: `${60 + i * 10}px` }}></div>
            </div>
          ))}
        </div>
       </div>

        
       <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">CATEGORY</h3>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="h-3 bg-blue-400 rounded" style={{ width: `${50 + i * 15}px` }}></div>
            </div>
          ))}
        </div>
      </div>

      <div>
            <h3 className="font-bold mb-2 text-gray-300">PRICE</h3>
            <input type="range" min="0" max="100" className="w-full accent-blue-500" />
            <p className="text-sm text-gray-600">Max. $100.00</p>
          </div>
       {/* Additional Filter Buttons */}
      <div className="space-y-4 pt-4">
        <button className="w-full h-10 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
          Apply Filters
        </button>
        
        <button className="w-full h-10 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors">
          Clear All
        </button>
      </div>
       </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 space-y-10">
                    {/* Hero Section */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-15">
                       <div className="flex flex-col ">
                           <div className="bg-white rounded-lg h-[360px] animate-pulse flex items-center justify-center shadow-md">
                             <img src="/gallery.png" alt="gallery" className="h-16 w-16 opacity-40" />
                          </div>
                          <div className="flex space-x-10 mt-5">
                             {[1, 2, 3].map((i) => (
                              <div 
                                 key={i}
                                   className="bg-white rounded-lg w-[148px] h-[124px] animate-pulse flex items-center justify-center shadow-md">
                                    <img src="/gallery.png" className="h-8 w-8 opacity-40" />
                                    </div>
                               ))}
                          </div>
                       </div>
                        <div className="space-y-5 rounded-lg animate-pulse shadow-md p-6 mt-10">
                           <div className="flex justify-between">
                            <div className="space-y-2">
                               <div className="h-4 w-24 bg-blue-400 rounded-full animate-pulse"></div>
                                <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                           </div>
                              <img src="/Like.png" alt="like" className="h-7 w-7"/>
                           </div>
                                
                             <img src="/gallery.png" alt="gallery" className="flex animate-pulse" />
                            <div className="space-y-2 flex flex-col items-center mt-10">
                                <div className="h-3 w-130 bg-gray-200 rounded-full animate-pulse"></div>
                                <div className="h-3 w-130 bg-gray-200 rounded-full animate-pulse"></div>
                                <div className="h-3 w-130 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex space-x-10 mt-10 items-center justify-between">
                                <div className="flex space-x-5">
                                 <div className="space-y-5">
                                  <div className="h-4 w-18 bg-gray-200 rounded-full animate-pulse"></div>
                                  <div className="h-4 w-18 bg-gray-200 rounded-full animate-pulse"></div>
                                 </div>
                                  <div className="space-y-5">
                                     <div className="h-4 w-18 bg-blue-400 rounded-full animate-pulse"></div>
                                     <div className="h-4 w-18 bg-blue-400 rounded-full animate-pulse"></div>
                                  </div>
                               </div>
                                 <div className="flex space-x-5">
                                    <div  className=" space-y-5">
                                       <div className="h-4 w-18 bg-gray-200 rounded-full animate-pulse"></div>
                                       <div className="h-4 w-18 bg-gray-200 rounded-full animate-pulse"></div>
                                    </div>
                                  <div className="space-y-5 ">
                                      <div className="h-4 w-18 bg-blue-400 rounded-full animate-pulse"></div>
                                      <div className="h-4 w-18 bg-blue-400 rounded-full animate-pulse"></div>
                                  </div>
                               </div>
                            </div>
                            <div className="flex justify-between items-center mt-15">
                                <div className="space-y-3">
                                   <div className="h-4 w-24 bg-blue-400 rounded-full animate-pulse"></div>
                                   <div className="h-4 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                                </div>
                                <div className="h-8 w-24 bg-blue-500 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </section>
                   <section className="mt-10 bg-white rounded-lg p-6 shadow-md space-y-6 animate-pulse">

  <section className=" bg-white rounded-lg p-6 shadow-md space-y-6 animate-pulse">
  
  <div className="flex flex-col items-start space-y-3 ">
    <div className="flex space-x-2 mb-10">
       <div  className="h-4 w-24 bg-blue-400 rounded-full animate-pulse"></div>
       <div  className="h-4 w-4 bg-blue-400 rounded-full animate-pulse"></div>
    </div>
    <div className="flex items-center w-full max-w-[908px]">
      <div className="flex items-center space-x-3">
       <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
             <img src="/profile.png" alt="profile" className="w-6 h-6" />
         </div>

        {/* blue + gray small rounded placeholders */}
        <div className="flex flex-col items-center space-y-3">
          <div className="h-4 w-24 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* spacer pushes end-pill to the right */}
      <div className="flex-1" />

      <div className="flex flex-col items-center space-y-3">
          <div className="h-4 w-24 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
        </div>
    </div>

    
    <div className="w-full max-w-[908px] h-[60px] bg-gray-200 rounded-full"></div>
  </div>

  <div className="flex flex-col items-start space-y-3 ">
  
    <div className="flex items-center w-full max-w-[908px]">
      <div className="flex items-center space-x-3">
       <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
             <img src="/profile.png" alt="profile" className="w-6 h-6" />
         </div>

      
        <div className="flex flex-col items-center space-y-3">
          <div className="h-4 w-24 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>

    
      <div className="flex-1" />

      <div className="flex flex-col items-center space-y-3">
          <div className="h-4 w-24 bg-blue-400 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
        </div>
    </div>

    
    <div className="w-full max-w-[908px] h-[60px] bg-gray-200 rounded-full"></div>
  </div>

  <div className="text-center text-gray-400 text-sm">Show All</div>
</section>

</section>


                  
        <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold">Popular Car</h2>
            <a href="#" className="text-blue-600 font-bold hover:underline">View All</a>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                     <div className="h-3 bg-blue-300 rounded w-25 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded w-25 animate-pulse"></div>
                   </div>
                    <img src="/Like.png" alt="like" />
                  </div>
                   <div className=" flex items-center justify-center">
                         <img src="/gallery.png" alt="Gallery" />
                   </div>
                    <div className="flex justify-between">
                        {[1, 2, 3].map((j) => (
                          <div key={j} className="h-3 bg-gray-300 rounded w-12 animate-pulse"></div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-y-2">
                             <div className="h-3 bg-blue-300 rounded w-20 animate-pulse"></div>
                             <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
                        </div>
                        <div className="h-8 bg-blue-700 rounded w-20 animate-pulse"></div>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </section>
                    <section className="mt-10">
               <h2 className="text-2xl font-medium text-gray-300 mb-4">Recommended Car</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                   <div className="flex justify-between items-start">
                    <div className="space-y-2">
                     <div className="h-3 bg-blue-300 rounded w-25 animate-pulse"></div>
                    <div className="h-3 bg-gray-300 rounded w-25 animate-pulse"></div>
                   </div>
                    <img src="/Like.png" alt="like" />
                  </div>
                   <div className=" flex items-center justify-center">
                         <img src="/gallery.png" alt="Gallery" />
                   </div>
                  <div className="flex justify-between">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-3 bg-gray-300 rounded w-12 animate-pulse"></div>
                    ))}
                  </div>
                   <div className="flex justify-between items-center">
                        <div className="space-y-2">
                             <div className="h-3 bg-blue-300 rounded w-20 animate-pulse"></div>
                             <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
                        </div>
                        <div className="h-8 bg-blue-700 rounded w-20 animate-pulse"></div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        
            </section>
                </main>
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