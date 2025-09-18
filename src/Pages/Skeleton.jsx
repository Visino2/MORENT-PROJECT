import React from "react";

export default function Skeleton() {
    return (
        <div className="min-h-screen bg-gray-50">
                {/* Navbar Skeleton */}
            <div className="hidden lg:flex justify-between items-center p-4 bg-white border-b border-white">
                <div className="h-5 bg-blue-400 rounded w-20 animate-pulse "></div>
                 <div className="flex-1 mx-8 relative">
                    <div className=" bg-gray-100 rounded-full w-full h-auto h md:h-[44px]  md:w-[492px] animate-pulse flex items-center px-4 space-x-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="h-2 bg-gray-500 rounded animate-pulse w-18"></div>
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
              {/* Mobile Navbar Skeleton */}
              <div className="lg:hidden bg-white border-b border-white">
                <div className="flex justify-between items-center p-4">
                    <div className="h-4 bg-blue-400 rounded w-20 animate-pulse "></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse flex items-center justify-center">
                        <img src="/profile.png" alt="profile" className="w-6 h-6" />
                    </div>
                </div>
                   <div className="px-4 pb-4">
                    <div className="flex items-center  space-x-4">
                        <div className="flex space-x-4 items-center">
                            <div className="h-10 bg-white rounded-full animate-pulse flex items-center  px-4 space-x-2 border border-gray-300 w-75">
                                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                                <div className="h-2 bg-gray-500 rounded animate-pulse w-18"></div>
                            </div>
                            <div className="w-12 h-12 bg-white border border-gray-300 rounded-full animate-pulse flex items-center justify-center">
                                <img src="/filter.png" alt="filter" className="w-5 h-5" />
                            </div>
                        </div>

                    </div>

                   </div>
                </div>

               <main className="p-4 lg:p-8">
                   {/*Desktop hero section*/}

                <div className="hidden lg:block p-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg h-[360px] animate-pulse flex items-center justify-center">
                           <img src="/gallery.png" alt="gallery" className="flex items-center animate-pulse" />
                        </div>
                           <div className="bg-white rounded-lg h-[360px]  w-[640px] flex items-center justify-center">
                           <img src="/gallery.png" alt="gallery" className="flex items-center animate-pulse" />
                        </div>
                    </div>

                </div> 

                      {/* Mobile hero section */}
                      <div className="lg:hidden p-4">
                          <div className="bg-white rounded-lg h-[240px] animate-pulse w-full flex items-center justify-center">
                              <img src="/gallery.png" alt="gallery" className="flex items-center animate-pulse" />
                          </div>
                      </div>

                      {/*filter tabs for desktop*/}
                     <section className="hidden lg:block">
                         <div className="  flex justify-between items-center mb-6 px-4">
                        <div className="bg-white rounded-lg w-[582px] h-[128px] px-4 flex items-center mb-6 justify-between">
                            <div className="flex flex-col  space-y-4">
                                <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                                <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                            </div>
                           <div className="flex justify-center flex-grow">
                            <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                           </div>
                            <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                        </div>
                            <div className="bg-blue-500 rounded-lg w-[60px] h-[60px] flex items-center"></div>
                           <div className="bg-white rounded-lg w-[582px] h-[128px] px-4 flex items-center mb-6 justify-between">
                            <div className="flex flex-col  space-y-4">
                                <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                                <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                            </div>
                           <div className="flex justify-center flex-grow">
                            <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                           </div>
                            <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                        </div>
                        </div>
                     </section>
                       {/*filter tabs for mobile*/}
                     <section className=" lg:hidden relative flex flex-col lg:flex-row justify-center items-center mb-6 px-4">
                        {/* First White Card */}
                     <div className="bg-white rounded-lg w-full lg:w-[582px] h-[128px] px-4 flex items-center justify-between mb-4 lg:mb-0">
                    <div className="flex flex-col space-y-4">
                    <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                   <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                   </div>
                   <div className="flex justify-center flex-grow">
                   <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                    </div>
                    <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                    </div>

                   {/* Second White Card */}
                  <div className="bg-white rounded-lg w-full lg:w-[582px] h-[128px] px-4 flex items-center justify-between mt-4 lg:mt-0">
                  <div className="flex flex-col space-y-4">
                  <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                  <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                  </div>
                      <div className="flex justify-center flex-grow">
                      <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                     </div>
                 <button className="h-4 bg-blue-400 rounded w-20 shadow animate-pulse"></button>
                </div>

               {/* Blue Circle */}
                <div className="absolute bg-blue-500 rounded-lg w-[60px] h-[60px] flex items-center justify-center
                  left-1/2 transform -translate-x-1/2 
                  top-[calc(50%-30px)] lg:top-1/2 animate-pulse">
               </div>
             </section>


         <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold">Popular Car</h2>
            <a href="#" className="text-blue-600 font-bold hover:underline">View All</a>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
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

      {/* Recommended Cars Skeleton */}
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
          <div className="flex justify-center mt-6">
            <div className="h-10 bg-blue-700 rounded w-32 animate-pulse"></div>
          </div>
            </section>
               </main>

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
          <div className="border-t border-gray-200 mt-8 p-4 items-center" >
           <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-center">
               <div className="h-3 bg-blue-300 rounded w-20  animate-pulse"></div>
               <div className="space-x-10 flex ">
                <div className="h-3 bg-gray-300 rounded w-20  animate-pulse"></div>
                <div className="h-3 bg-gray-300 rounded w-20  animate-pulse"></div>
               </div>
           </div>
          </div>
        </div>
      </footer>
                         

            
        </div>
    );
}

