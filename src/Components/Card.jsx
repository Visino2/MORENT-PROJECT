import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ car, index }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const people = car.people || "";
  const price = car.price || 0;

  // ✅ Navigate with car index
  const handleRentNow = () => {
    navigate(`/dashboard/${index}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col relative hover:shadow-lg transition-shadow duration-300 w-full">
      {/* Like Button */}
      <div
        className="absolute top-4 right-4 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:opacity-80"
        onClick={() => setLiked(!liked)}
      >
        <img
          src={liked ? "/Like.png" : "/Like-2.png"}
          alt="Like"
          className="w-6 h-6"
        />
      </div>

      {/* Car Info */}
      <div>
        <h3 className="font-semibold text-gray-800 text-lg">{car.name}</h3>
        <p className="text-sm text-gray-500">{car.type}</p>
      </div>

      {/* Car Image */}
      <div className="flex justify-center my-4">
        <img
          src={car.image}
          alt={car.name}
          className="w-full max-h-40 object-contain"
          loading="lazy"
        />
      </div>

      {/* Car Details */}
      <div className="mt-2 flex justify-between text-gray-500 text-xs sm:text-sm">
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
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex flex-col">
          <div className="flex items-end gap-2">
            <p className="text-lg font-bold text-gray-800">${price}.00/day</p>
            {car.oldPrice && (
              <p className="text-gray-400 line-through text-sm">
                ${car.oldPrice}.00
              </p>
            )}
          </div>
        </div>

        {/* ✅ Rent Now Button */}
        <button
          onClick={handleRentNow}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
