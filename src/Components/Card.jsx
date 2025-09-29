import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Card({ car, index, layout = "default" }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const people = car.people || "";
  const price = car.price || 0;

  const handleRentNow = () => {
    navigate(`/dashboard/${index}`);
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md p-4 relative
        ${layout === "popular" ? "flex-shrink-0 w-[80%] sm:w-[60%] md:w-auto" : ""}
        ${layout === "recommended" ? "flex flex-row items-center gap-4" : "flex flex-col"}
      `}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {/* Like Button */}
      <motion.div
        className="absolute top-4 right-4 cursor-pointer"
        whileTap={{ scale: 0.7 }}
        onClick={() => setLiked(!liked)}
      >
        <img
          src={liked ? "/Like.png" : "/Like-2.png"}
          alt="Like"
          className="w-6 h-6"
        />
      </motion.div>

      {/* Car Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${
          layout === "recommended"
            ? "w-[140px] h-[90px] flex-shrink-0 flex justify-center"
            : "flex justify-center my-4"
        }`}
      >
        <img
          src={car.image}
          alt={car.name}
          className={`object-contain ${
            layout === "recommended" ? "w-full h-full" : "w-full max-h-40"
          }`}
          loading="lazy"
        />
      </motion.div>

      {/* Car Info + Details */}
      <div
        className={`${
          layout === "recommended"
            ? "flex flex-col flex-1 justify-between h-full"
            : ""
        }`}
      >
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.type}</p>
        </div>

        {/* Car Details */}
        <div
          className={`mt-2 text-gray-500 text-xs sm:text-sm
            ${layout === "recommended" ? "flex flex-col gap-2" : "flex justify-between"}
          `}
        >
          <div className="flex items-center gap-1">
            <img src="/gas-station.png" alt="fuel" className="w-4 h-4" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/manual.png" alt="transmission" className="w-4 h-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/people.png" alt="people" className="w-4 h-4" />
            <span>{people}</span>
          </div>
        </div>

        {/* Price + Rent Button */}
        <div
          className={`mt-4 ${
            layout === "recommended"
              ? "flex justify-between items-center"
              : "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-end gap-2">
              <p className="text-lg font-bold text-gray-800">
                ${price}.00/day
              </p>
              {car.oldPrice && (
                <p className="text-gray-400 line-through text-sm">
                  ${car.oldPrice}.00
                </p>
              )}
            </div>
          </div>

          <motion.button
            onClick={handleRentNow}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rent Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
