import React from 'react'
import { FaStar } from "react-icons/fa";

const RestaurantCard = () => {
  return (
    <div className="w-64 rounded-xl overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src="https://t3.ftcdn.net/jpg/06/88/00/70/360_F_688007042_T4UobfcP4fLL6NiXFcccJSmm60ktxKto.jpg"
          alt="Pizza"
          className="w-full h-40 object-cover rounded-xl"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-semibold">
          50% OFF
        </span>
      </div>

      <div className="mt-2 px-1">
        <h3 className="text-lg font-semibold">Pizza Hut</h3>

        <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
          <FaStar className="text-green-600" size={14} />
          <span>4.3 • 20-25 mins</span>
        </div>

        <p className="text-sm text-gray-600 mt-1">Pizzas</p>

        <p className="text-sm text-gray-500">Connaught Place</p>
      </div>
    </div>
  )
}

export default RestaurantCard
