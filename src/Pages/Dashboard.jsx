import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Cars from "../Data/Cars";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Dashboard() {
  const { id } = useParams();
  const idx = !isNaN(+id) ? +id : 0;
  const car = Cars[idx];

  const [mainImage, setMainImage] = useState(car?.image || "");
  const [likedCars, setLikedCars] = useState({});

  const toggleLike = (carIndex) => {
    setLikedCars((prev) => ({
      ...prev,
      [carIndex]: !prev[carIndex],
    }));
  };

  if (!car) {
    return <p className="text-center text-2xl mt-20">Car not found</p>;
  }

  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 lg:px-12 mt-6 flex gap-6">
        
        <aside className="w-64 hidden lg:block border-r border-white bg-white p-4">
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
            <p className="text-sm text-gray-600">Max. $100.00 </p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 space-y-8">
          
          <div className="grid md:grid-cols-2 gap-6">
        
            <div className="bg-[#3563E9] text-white rounded-xl p-6">
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

              
              <div className="flex gap-3 mt-4">
                {[car.image, "/View-2.jpg", "/View-3.jpg"].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    className={`w-20 h-16 rounded-lg object-cover cursor-pointer border ${mainImage === img ? "border-blue-500" : "border-transparent"}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white shadow rounded-xl p-6">
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

              {/* Rating Stars */}
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
                    ${(car.price ?? car.price)}.00 / day
                  </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Reviews Section (added from second code) */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold mb-4">Reviews (13)</h3>
            <div className="space-y-6">
              {/* Review 1 */}
              <div className="flex gap-4">
                <img src="/user.png" alt="Alex" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">Alex Stanton</h4>
                      <h4 className="text-gray-400 text-sm">CEO at Bukalapak</h4>
                    </div>
                    <span className="text-sm text-gray-400">21 July 2022</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    We are very happy with the service from the MORENT App. Morent has a low price
                    and also a large variety of cars with good and comfortable facilities. In addition,
                    the services provided by the officers are also friendly and very polite.
                  </p>
                  <div className="text-yellow-400 mt-2">★★★★☆</div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="flex gap-4">
                <img src="/user-2.png" alt="Skylar" className="w-12 h-12 rounded-full" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">Skylar Dias</h4>
                      <h4 className="text-gray-400 text-sm">CEO at Amazon</h4>
                    </div>
                    <span className="text-sm text-gray-400">20 July 2022</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    We are greatly helped by the services of the MORENT Application. Morent has a low price
                    and also a large variety of cars with good and comfortable facilities. In addition,
                    the services provided by the officers are also friendly and very polite.
                  </p>
                  <div className="text-yellow-400 mt-2">★★★★☆</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Cars */}
          <div>
            <div className="flex justify-between items-center mb-3 px-4 pr-9">
              <h3 className="text-2xl font-bold text-gray-400">Recent Cars</h3>
              <Link to="/" className="text-blue-600 hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-90">
              {Cars.slice(0, 3).map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-4 w-[317px] h-[388px] flex flex-col relative hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Like Button */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:opacity-80"
                    onClick={() => toggleLike(i)}
                  >
                    <img
                      src={likedCars[i] ? "/Like.png" : "/Like-2.png"}
                      alt="Like"
                      className="w-6 h-6"
                    />
                  </div>

                  {/* Car Info */}
                  <h3 className="font-semibold text-gray-800 text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.type}</p>

                  {/* Car Image */}
                  <img src={c.image} alt={c.name} className="w-full h-40 object-contain mb-4" />

                  {/* Car Details */}
                  <div className="mt-4 flex justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <img src="/gas-station.png" alt="fuel" className="w-4 h-4" />
                      <span>{c.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/manual.png" alt="transmission" className="w-4 h-4" />
                      <span>{c.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/people.png" alt="people" className="w-4 h-4" />
                      <span>{c.people}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="mt-3 text-blue-600 font-bold">${c.price}.00/day</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Cars */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-3 pr-9">
              <h3 className="text-2xl font-bold">Recommended Cars</h3>
              <Link to="/" className="text-blue-600 hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-90">
              {Cars.slice(3, 6).map((c, i) => (
                <div
                  key={i + 4}
                  className="bg-white rounded-lg shadow-md p-4 w-[317px] h-[388px]  flex flex-col relative hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Like Button */}
                  <div
                    className="absolute top-4 right-4 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:opacity-80"
                    onClick={() => toggleLike(i + 4)}
                  >
                    <img
                      src={likedCars[i + 4] ? "/Like.png" : "/Like-2.png"}
                      alt="Like"
                      className="w-6 h-6"
                    />
                  </div>

                  {/* Car Info */}
                  <h3 className="font-semibold text-gray-800 text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-500">{c.type}</p>

                  {/* Car Image */}
                  <img src={c.image} alt={c.name} className="w-full h-40 object-contain mb-4" />

                  {/* Car Details */}
                  <div className="mt-4 flex justify-between text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <img src="/gas-station.png" alt="fuel" className="w-4 h-4" />
                      <span>{c.fuel}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/manual.png" alt="transmission" className="w-4 h-4" />
                      <span>{c.transmission}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="/people.png" alt="people" className="w-4 h-4" />
                      <span>{c.people}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="mt-3 text-blue-600 font-bold">${c.price}.00/day</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
