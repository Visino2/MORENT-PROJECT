import { useParams, Link, useNavigate } from "react-router-dom";
import Cars from "../Data/Cars";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SkeletonDashboard from "./SkeletonDashboard";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [likedCars, setLikedCars] = useState({});
  const idx = !isNaN(+id) ? +id : 0;
  const car = Cars[idx];
  const [mainImage, setMainImage] = useState(car?.image || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonDashboard />;
  if (!car) return <p className="text-center text-2xl mt-20">Car not found</p>;

  // Toggle like
  const toggleLike = (i) => {
    setLikedCars((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 lg:px-12 mt-6 flex gap-6">
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block border-r border-white bg-white p-4">
          {/* Sidebar Filters */}
          <div className="mb-6">
            <h3 className="font-bold mb-2 text-gray-300">TYPE</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <label><input type="checkbox" className="accent-blue-500" /> Sport (10)</label>
              <label><input type="checkbox" className="accent-blue-500" /> SUV (12)</label>
              <label><input type="checkbox" className="accent-blue-500" /> MPV (16)</label>
              <label><input type="checkbox" className="accent-blue-500" /> Sedan (20)</label>
              <label><input type="checkbox" className="accent-blue-500" /> Coupe (14)</label>
              <label><input type="checkbox" className="accent-blue-500" /> Hatchback (14)</label>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-2 text-gray-300">CAPACITY</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <label><input type="checkbox" className="accent-blue-500" /> 2 Person (10)</label>
              <label><input type="checkbox" className="accent-blue-500" /> 4 Person (14)</label>
              <label><input type="checkbox" className="accent-blue-500" /> 6 Person (12)</label>
              <label><input type="checkbox" className="accent-blue-500" /> 8+ Person (16)</label>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-2 text-gray-300">PRICE</h3>
            <input type="range" min="0" max="100" className="w-full accent-blue-500" />
            <p className="text-sm text-gray-600">Max. $100.00</p>
          </div>
        </aside>

        {/* HERO + CAR DETAILS + REVIEWS */}
        <section className="flex-1 space-y-10">
          {/* HERO */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left: Hero Info */}
            <motion.div
              className="bg-[#3563E9] text-white rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold mb-2">
                Sports car with the best design and acceleration
              </h2>
              <p className="text-sm mb-4">
                Safety and comfort while driving a futuristic and elegant sports car.
              </p>
              <img
                src={mainImage}
                alt={car.name}
                className="w-full h-44 object-contain rounded"
              />

              {/* Thumbnails (Desktop) */}
              <div className="hidden md:flex gap-3 mt-4">
                {[car.image, "/View-2.jpg", "/View-3.jpg"].map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className={`w-20 h-16 rounded-lg object-cover cursor-pointer border ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Thumbnails (Mobile) */}
            <div className="md:hidden flex gap-3">
              {[car.image, "/View-2.jpg", "/View-3.jpg"].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`thumb-mobile-${i}`}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-20 rounded-lg object-cover cursor-pointer border ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                />
              ))}
            </div>

            {/* Right: Car Details */}
            <motion.div
              className="bg-white shadow rounded-xl p-6"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold">{car.name}</h2>
                <button
                  onClick={() => toggleLike(idx)}
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img
                    src={likedCars[idx] ? "/Like.png" : "/Like-2.png"}
                    alt="Like"
                    className="w-6 h-6"
                  />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-gray-500 ml-2">440+ Reviews</span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                NISMO has become the embodiment of {car.name}’s outstanding performance,
                inspired by the most unforgiving proving ground, the “race track”.
              </p>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <p>Type Car: <span className="font-semibold">{car.type}</span></p>
                <p>Capacity: <span className="font-semibold">{car.people}</span></p>
                <p>Steering: <span className="font-semibold">{car.transmission}</span></p>
                <p>Gasoline: <span className="font-semibold">{car.fuel}</span></p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  {car.oldPrice && (
                    <p className="text-gray-400 line-through">${car.oldPrice}.00</p>
                  )}
                  <p className="text-xl font-bold text-blue-600">
                    ${car.price}.00 / day
                  </p>
                </div>
                <motion.button
                  onClick={() => navigate(`/rent/${idx}`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Rent Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div
            className="bg-white shadow rounded-xl p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Reviews (13)</h3>
            <div className="space-y-6">
              {[ // reviews array for DRY code
                { name: "Alex Stanton", role: "CEO at Bukalapak", img: "/user.png", text: "We are very happy with the service from the MORENT App.", date: "21 July 2022" },
                { name: "Skylar Dias", role: "CEO at Amazon", img: "/user-2.png", text: "We are greatly helped by the services of the MORENT Application.", date: "20 July 2022" }
              ].map((rev, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold">{rev.name}</h4>
                        <h4 className="text-gray-400 text-sm">{rev.role}</h4>
                      </div>
                      <span className="text-sm text-gray-400">{rev.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{rev.text}</p>
                    <div className="text-yellow-400 mt-2">★★★★☆</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* ================= RECENT & RECOMMENDED ================= */}
      <section className="px-6 lg:px-12 space-y-10 mt-10 ">
        {/* Recent Cars */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-gray-400">Recent Cars</h3>
            <Link to="/" className="text-blue-600 hover:underline text-sm md:text-base">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {Cars.slice(0, 3).map((c, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Like Button */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition"
                    onClick={() => toggleLike(i + 100)}
                  >
                    <img
                      src={likedCars[i + 100] ? "/Like.png" : "/Like-2.png"}
                      alt="Like"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.type}</p>
                  <img src={c.image} alt={c.name} className="w-full h-40 object-contain mb-4" />
                  <p className="mt-3 text-blue-600 font-bold">${c.price}.00/day</p>
                  {/* Rent Now Button */}
                  <motion.button
                    onClick={() => navigate(`/rent/${i + 100}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Rent Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Cars */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl md:text-2xl font-bold">Recommended Cars</h3>
            <Link to="/" className="text-blue-600 hover:underline text-sm md:text-base">
              View All
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {Cars.slice(3, 6).map((c, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Like Button */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition"
                    onClick={() => toggleLike(i + 200)}
                  >
                    <img
                      src={likedCars[i + 200] ? "/Like.png" : "/Like-2.png"}
                      alt="Like"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.type}</p>
                  <img src={c.image} alt={c.name} className="w-full h-40 object-contain mb-4" />
                  <p className="mt-3 text-blue-600 font-bold">${c.price}.00/day</p>
                  {/* Rent Now Button */}
                  <motion.button
                    onClick={() => navigate(`/rent/${i + 200}`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Rent Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
