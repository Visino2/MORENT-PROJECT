import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";   

import {
  LogOut,
  Moon,
  Sun,
  Home,
  Car,
  BarChart3,
  Wallet,
  Mail,
  Calendar,
  Settings,
  HelpCircle,
  Menu,
  X,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SkeletonChart from "../Pages/SkeletonChart";
import Navbar from "../Components/Navbar";
import Routing from "../Components/Routing";
import { useNavigate } from "react-router-dom";
import { useMap } from "react-leaflet";

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}



const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// --- Mock / Real car data (use your real Cars array if you already have it) ---
const Cars = [
  { name: "Koenigsegg", type: "Sport", image: "/Koenigsegg.png", fuel: "90L", transmission: "Manual", people: "2 People", price: 99, oldPrice: null, popular: true },
  { name: "Nissan GT-R", type: "Sport", image: "/NissanGT-R.png", fuel: "80L", transmission: "Manual", people: "2 People", price: 80, oldPrice: 100, popular: true },
  { name: "Rolls-Royce", type: "Sedan", image: "/Rolls-Royce.png", fuel: "70L", transmission: "Manual", people: "4 People", price: 96, oldPrice: null, popular: true },
  { name: "All New Rush", type: "SUV", image: "/ALL-New-Rush.png", fuel: "70L", transmission: "Manual", people: "6 People", price: 72, oldPrice: 89, popular: false },
  { name: "CR - V", type: "SUV", image: "/CR-V.png", fuel: "80L", transmission: "Manual", people: "6 People", price: 80, oldPrice: null, popular: false },
  // ... add remaining cars as needed
];

// --- Chart & transactions sample (use your state or API instead if you have one) ---
const CHART_DATA = [
  { name: "Sport Car", value: 17439, color: "#0D3559" },
  { name: "SUV", value: 9478, color: "#175D9C" },
  { name: "Coupe", value: 18197, color: "#2185DE" },
  { name: "Hatchback", value: 12510, color: "#63A9E8" },
  { name: "MPV", value: 14406, color: "#A6CEF2" },
];

export default function DashboardResponsive() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // use Cars as data source for transactions & selected car
  const [chartData] = useState(CHART_DATA);
  const [transactions] = useState([
    { car: Cars[1].name, type: Cars[1].type, amount: Cars[1].price, date: "20 July", image: Cars[1].image },
    { car: Cars[0].name, type: Cars[0].type, amount: Cars[0].price, date: "19 July", image: Cars[0].image },
    { car: Cars[2].name, type: Cars[2].type, amount: Cars[2].price, date: "18 July", image: Cars[2].image },
    { car: Cars[4] ? Cars[4].name : "CR - V", type: "SUV", amount: 80, date: "17 July", image: Cars[4] ? Cars[4].image : "/CR-V.png" },
  ]);
  const [selectedCar] = useState({
    name: Cars[1].name,
    type: Cars[1].type,
    id: "#9761",
    image: Cars[1].image,
  });

  const totalRentals = chartData.reduce((s, it) => s + it.value, 0);

  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
    await signOut(auth);
    navigate("/");
  } catch (error) {
    console.error("Logout error:", error);
  }
};


  // Sidebar content (re-used for desktop + mobile drawer)
const SidebarContent = (
  <>
    <div>
      <h1 className="hidden md:block text-2xl font-bold text-blue-600 mb-6">MORENT</h1>
      <p className="text-xs text-gray-400 uppercase mb-3">Main Menu</p>
      <nav className="space-y-2">
        <button className="flex items-center gap-3 w-full text-left p-3 rounded-lg bg-blue-600 text-white font-medium">
          <Home size={18} /> Dashboard
        </button>
        <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
          <Car size={18} /> Car Rent
        </button>
        <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
          <BarChart3 size={18} /> Insight
        </button>
        <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
          <Wallet size={18} /> Reimburse
        </button>
        <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
          <Mail size={18} /> Inbox
        </button>
        <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
          <Calendar size={18} /> Calendar
        </button>
      </nav>
    </div>

    <div className="space-y-4">
      <p className="text-xs text-gray-400 uppercase">Preferences</p>
      <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
        <Settings size={18} /> Settings
      </button>
      <button className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}>
        <HelpCircle size={18} /> Help & Center
      </button>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`flex items-center gap-3 p-3 rounded-lg w-full transition-colors ${darkMode ? "text-gray-400 bg-gray-900 hover:bg-gray-700" : "text-gray-600 bg-white hover:bg-gray-100"}`}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />} Dark Mode
      </button>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full"
      >
        <LogOut size={18} /> Log Out
      </button>
    </div>
  </>
);


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>

      {/* Desktop Navbar (optional) */}
      <div className="hidden lg:block">
        <Navbar darkMode={darkMode} />
      </div>

      {/* Mobile Header (sticky) */}
      <header className="lg:hidden sticky top-0 z-50 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2">
            <Menu size={22} />
          </button>
          <h1 className="text-lg font-bold text-blue-600">MORENT</h1>
          <div className="flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">AV</button>
          </div>
        </div>

        {/* Search + filter (mobile mockup) */}
        <div className="px-4 pb-4">
          <div className={`flex items-center gap-3 px-4 py-3 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search something here"
              className={`flex-1 bg-transparent outline-none text-sm ${darkMode ? "text-white" : "text-gray-800"}`}
            />
            <SlidersHorizontal size={18} className="text-gray-400" />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-64 shadow-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-blue-600">MORENT</h2>
              <button onClick={() => setMobileMenuOpen(false)}><X size={20} /></button>
            </div>
            {SidebarContent}
          </aside>
        </div>
      )}

      {/* Main container */}
      <div className="min-h-screen">
        <div className="flex min-h-screen">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:flex w-64 shadow-md p-6 flex-col justify-between bg-white dark:bg-gray-800">
            {SidebarContent}
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

              {/* Left column (Details) */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-lg p-4 md:p-6 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}
                >
                  <h2 className="text-lg md:text-xl font-bold mb-4">Details Rental</h2>

                  {/* Map: show interactive map on desktop, simple placeholder on mobile */}
                  <div className="rounded-lg overflow-hidden mb-4 h-48 md:h-64">
                    {/* Map Section */}
                  <div className="rounded-lg overflow-hidden mb-4 h-64 md:h-80 lg:h-96">
                       <MapContainer
                        center={[6.5244, 3.3792]}
                        zoom={window.innerWidth < 768 ? 10 : 12} // zooms out a bit on mobile
                        className="h-full w-full"
                     >
                      <TileLayer
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution="&copy; OpenStreetMap"
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
                      <ResizeMap /> {/* ensures map resizes properly */}
                      </MapContainer>
                    </div>


                    {/* Mobile static map placeholder to match mockup look */}
                    <div className="lg:hidden h-full w-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center mb-2">
                          <Car size={20} />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-200">Map View</p>
                      </div>
                    </div>
                  </div>

                 <div className="flex flex-col justify-between mb-6">
                {/* Car Image and Details */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 rounded-lg p-4 w-32 h-20 flex items-center justify-center ">
                    <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold">{selectedCar.name}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{selectedCar.type}</p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{selectedCar.id}</p>
                </div>

                {/* Pick-up */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
              </div>

                  {/* Total */}
                  <div className="mt-4 pt-4 border-t dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold">Total Rental Price</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Overall price and includes rental discount</p>
                      </div>
                      <p className="text-2xl font-bold">$80.00</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right column (chart + transactions) */}
              <div className="flex flex-col gap-6">

                {/* Chart */}
                <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.45 }} className={`rounded-lg p-4 md:p-6 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Top 5 Car Rental</h2>
                    <button className="text-gray-400">•••</button>
                  </div>

                  <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                      <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value">
                        {chartData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                      </Pie>
                      <Tooltip formatter={(value) => [value.toLocaleString(), "Rentals"]} />
                    </PieChart>
                  </ResponsiveContainer>

                  <div className="text-center -mt-36 mb-24 pointer-events-none">
                    <p className="text-2xl md:text-3xl font-bold">{totalRentals.toLocaleString()}</p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Rental Car</p>
                  </div>

                  <div className="space-y-2">
                    {chartData.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <div className="font-semibold text-sm">{item.value.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Recent Transactions */}
                <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.45 }} className={`rounded-lg p-4 md:p-6 shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Recent Transaction</h2>
                    <button className="text-blue-600 text-sm">View All</button>
                  </div>

                  <div className="space-y-4">
                    {transactions.map((t, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-28 h-16 rounded-lg flex items-center justify-center ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                            <img src={t.image} alt={t.car} className="w-20 h-12 object-contain" />
                          </div>
                          <div>
                            <p className="font-bold">{t.car}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{t.type}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t.date}</p>
                          <p className="text-lg font-bold">${t.amount}.00</p>
                        </div>
                      </div>
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
