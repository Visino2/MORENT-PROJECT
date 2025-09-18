import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cars from "../Data/Cars";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Skeleton from "./Skeleton";

 function Landing() {
    const navigate = useNavigate();

    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);


    if (loading) {
        return (
            <Skeleton />
        )
    }

    
  return (
    <div className="bg-gray-50 min-h-screen ">
        <Navbar />
        
        <main className="p-6 ">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#54A6FF] text-white p-6 rounded-lg overflow-hidden  relative w-full md:w-[640px] md:h-[360px] ">
                    <h2 className="text-2xl  md:text-3xl font-bold mb-4">The Best Platform for Car Rental</h2>
                    <p className="mb-7 ">Ease of doing car rental safely and reliably. Of course at low price.</p>
                    <button className=" text-white bg-[#3563E9] px-4 py-2 font-semibold rounded w-fit  hover:bg-blue-800">
                       Rental Car
                    </button>
                    <div className="flex justify-center mt-0 ">
                     <img src="/image-7.png" alt="koenigsegg" className=" w-[280px] md:w-[406px] h-auto"  />
                     </div>
                </div>


                 <div className="bg-[#3563E9] hidden md:block text-white p-6 rounded-lg overflow-hidden relative w-full  md:w-[640px] md:h-[360px] ">
                      <h2 className="text-2xl md:3xl font-bold mb-4 ">Easy way to rent a car at alow price</h2>
                      <p className="mb-7 ">Providing cheap car rental services and safe and comfortable facilities</p>
                      <button className=" text-white bg-[#54A6FF] px-4 py-2 font-semibold rounded w-fit  hover:bg-blue-900">
                        Rental Car
                      </button>
                    <div  className="flex justify-center mt-0 ">
                          <img src="/NissanGT-R.png" alt="nissan-Gt" className="w-[240] md:w-[340px] h-auto" />
                    </div>
                 </div>
            </section>

        <section className= " flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                <div className="bg-white p-6 shadow rounded-lg w-full md:w-[582px] ">
                    <h3 className="font-semibold mb-4 flex items-center gap-2"><input type="radio" className="w-4 h-4 accent-blue-500"/>
                    Pick -up</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                        <label className="text-md font-medium text-black mb-1">Locations</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600">
                            <option value="" >Select your city</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="porthaarcourt">Portharcourt</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-md font-medium text-black mb-1">Date</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600 ">
                            <option value="">Select your date</option>
                            <option value="2025-08-25">25 Aug 2025</option>
                            <option value="2025-08 26">26 Aug 2025</option>
                            <option value="2025-08-27">27 Aug 2025</option>
                        </select>
                    </div>
                     <div className="flex flex-col">
                        <label className="text-md font-medium text-black mb-1">Time</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600">
                            <option value="">Choose your time</option>
                            <option value="08:00">08:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="20:00">04:00 PM</option>
                        </select>
                     </div>
                      </div>
                </div>
                   <div className="flex justify-center items-center rounded-lg w-[60px] h-[60px] bg-blue-500 mx-auto md:mx-0 my-4 md:my-0">
                    <img src="/icon.png" alt="swapicon"  className="w-12 h-12 shadow cursor-pointer hover:scale-110 transition"/>
                   </div>
                <div  className="bg-white p-6 shadow rounded-lg w-full md:w-[582px] ">
                    <h3 className="font-semibold mb-4 flex items-center gap-2"><input type="radio" className="w-4 h-4 accent-blue-500"/>
                    Drop -off</h3>
                     <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 ">
                        <div className="flex flex-col">
                        <label className="text-md font-medium text-black mb-1">Locations</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600">
                            <option value="" >Select your city</option>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="portharcourt">Portharcourt</option>
                        </select>
                    </div>
                    <div className="flex flex-col ">
                        <label className="text-md font-medium text-black mb-1">Date</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600 ">
                            <option value="">Select your date</option>
                            <option value="2025-08-25">25 Aug 2025</option>
                            <option value="2025-08 26">26 Aug 2025</option>
                            <option value="2025-08-27">27 Aug 2025</option>
                        </select>
                    </div>
                     <div className="flex flex-col ">
                        <label className="text-md font-medium text-black mb-1">Time</label>
                        <select className=" outline-none border-0 p-2 rounded text-sm text-gray-600">
                            <option value="">Choose your time</option>
                            <option value="08:00">08:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="20:00">04:00 PM</option>
                        </select>
                     </div>
                    </div>
                </div>
            </section> 

            <section className="mt-10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-medium text-gray-300">Popular Car </h2>
                    <a href="#" className="text-blue-600 font-bold hover:underline">View All</a>
                  </div>
                  <div className="flex overflow-x-auto md:grid w-full md:grid-cols-4 gap-6                                                                                              ">
                       {Cars.slice(0, 4).map((car, index) => (
                        <Card key={index} car={car} index={index} layout="popular" />      
                     ))}
                   </div>
            </section>
             <section className="mt-10">
                     <h2 className="text-2xl font-medium text-gray-300 mb-4">Recommended Car</h2>
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {Cars.slice(4, 12).map((car, index) => (
                            <Card key={index} car={car} index={index} layout="recommeneded" />
                        ))}
                     </div>
                     <div className="flex justify-center mt-6">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">
                            Show More Car
                        </button>
                     </div>
             </section>
        </main>
        <Footer />
    </div>
    );
}
export default Landing;