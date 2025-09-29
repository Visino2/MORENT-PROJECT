import React, { useState, useEffect } from "react";
import { LogOut, Moon, Sun, Home, Car, BarChart3, Wallet, Mail, Calendar, Settings, HelpCircle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Navbar from "../Components/Navbar";
import Routing from "../Components/Routing"; 
import { motion } from "framer-motion";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function DashboardChart() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Chart data
  const [chartData] = useState([
    { name: "Sport Car", value: 17439, color: "#0D3559" },
    { name: "SUV", value: 9478, color: "#175D9C" },
    { name: "Coupe", value: 18197, color: "#2185DE" },
    { name: "Hatchback", value: 12510, color: "#63A9E8" },
    { name: "MPV", value: 14406, color: "#A6CEF2" },
  ]);

  // Transaction data with car images
  const [transactions] = useState([
    { car: "Nissan GT - R", type: "Sport Car", amount: 80, date: "20 July", image: "/NissanGT-R.png" },
    { car: "Koegnigsegg", type: "Sport Car", amount: 99, date: "19 July", image: "/Koenigsegg.png" },
    { car: "Rolls - Royce", type: "Sport Car", amount: 96, date: "18 July", image: "/Rolls-Royce.png" },
    { car: "CR - V", type: "SUV", amount: 80, date: "17 July", image: "/CR-V.png" },
  ]);

  // Selected car for rental details
  const [selectedCar] = useState({
    name: "Nissan GT - R",
    type: "Sport Car",
    id: "#9761",
    image: "/NissanGT-R.png"
  });

  // Calculate total rentals
  const totalRentals = chartData.reduce((sum, item) => sum + item.value, 0);

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} />
      <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
        <div className="flex min-h-screen">
    
          {/* Sidebar */}
          <aside className={`w-64 shadow-md p-6 flex flex-col justify-between ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div>
              
              <div className="mb-6">
                <p className="text-xs text-gray-400 uppercase mb-3">Main Menu</p>
                <nav className="space-y-2">
                  <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg bg-blue-600 text-white font-medium">
                    <Home size={20} />
                    Dashboard
                  </button>
                  <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                    <Car size={20} />
                    Car Rent
                  </button>
                  <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                    <BarChart3 size={20} />
                    Insight
                  </button>
                  <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                    <Wallet size={20} />
                    Reimburse
                  </button>
                  <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                    <Mail size={20} />
                    Inbox
                  </button>
                  <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                    <Calendar size={20} />
                    Calender
                  </button>
                </nav>
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-4">
              <p className="text-xs text-gray-400 uppercase">Preferences</p>
              <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                <Settings size={20} />
                Settings
              </button>
              <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}>
                <HelpCircle size={20} />
                Help & Center
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center gap-3 p-3 rounded-lg w-full transition-colors ${darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                Dark Mode
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors mt-8"
              >
                <LogOut size={20} /> Log Out
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 space-y-6">
            
           <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
               <div className="lg:col-span-2">
                <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
            >
              <h2 className="text-xl font-bold mb-6">Details Rental</h2>
              
              {/* Map */}
             <div className="h-64 rounded-lg overflow-hidden mb-6">
         <MapContainer center={[6.5244, 3.3792]} zoom={12} className="h-full w-full">
       <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; OpenStreetMap'
        />

    
       <Marker position={[6.5244, 3.3792]} icon={customIcon}>
      <Popup>
        Lagos, Nigeria <img src="/Rolls-Royce.png" alt="" />
      </Popup>
       </Marker>

    
        <Marker position={[6.4654, 3.4064]} icon={customIcon}>
         <Popup>
          Another Location <img src="/Koenigsegg.png" alt="" />
          </Popup>
         </Marker>

       <Routing from={[6.5244, 3.3792]} to={[6.4654, 3.4064]} />
        </MapContainer>
      </div>



              {/* Car Info & Pick-up/Drop-off */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Car Image and Details */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="bg-blue-600 rounded-lg p-4 w-32 h-24 flex items-center justify-center mb-3">
                    <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold">{selectedCar.name}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{selectedCar.type}</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{selectedCar.id}</p>
                </div>

                {/* Pick-up */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <input type="radio" checked readOnly className="w-4 h-4 accent-blue-500"/>
                    Pick - Up
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-bold block mb-1">Locations</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>Kota Semarang</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-1">Date</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>20 July 2022</option>
                        <option>21 July 2022</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-1">Time</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>07:00</option>
                        <option>08:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Drop-off */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <input type="radio" checked readOnly className="w-4 h-4 accent-blue-500"/>
                    Drop - Off
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-bold block mb-1">Locations</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>Kota Semarang</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-1">Date</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>21 July 2022</option>
                        <option>22 July 2022</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-1">Time</label>
                      <select className={`w-full outline-none border-0 p-2 rounded text-sm ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                        <option>01:00</option>
                        <option>02:00</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Price */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold">Total Rental Price</p>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Overall price and includes rental discount</p>
                  </div>
                  <p className="text-3xl font-bold">$80.00</p>
                </div>
              </div>
            </motion.div>

            </div>

            {/* Graph + Recent Transactions */}
            <div className="flex flex-col gap-6">
              {/* Chart */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <h2 className="text-xl font-bold mb-4">Top 5 Car Rental</h2>
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

                {/* Center text */}
                <div className="text-center -mt-48 mb-32 pointer-events-none">
                  <p className="text-3xl font-bold">{totalRentals.toLocaleString()}</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Rental Car</p>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{item.name}</span>
                      </div>
                      <span className="font-semibold">{item.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
           

              {/* Recent Transactions */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`shadow-md rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Recent Transaction</h2>
                  <button className="text-blue-600 text-sm hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {transactions.map((t, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-28 h-16 rounded-lg flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                          <img src={t.image} alt={t.car} className="w-20 h-12 object-contain" />
                        </div>
                        <div>
                          <p className="font-bold">{t.car}</p>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"} mb-1`}>{t.date}</p>
                        <p className="text-lg font-bold">${t.amount}.00</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}