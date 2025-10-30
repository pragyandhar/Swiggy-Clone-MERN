import React from 'react'
import { FaStar } from "react-icons/fa";

const RestaurantCard = ({restaurant}) => {
  return (
    <div className="w-64 rounded-xl overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${restaurants.info.cloudinaryImageId}`}
          alt="Pizza"
          className="w-full h-40 object-cover rounded-xl"
        />
        <span className="absolute bottom-2 left-2 text-white text-lg font-semibold">
          50% OFF
        </span>
      </div>

      <div className="mt-2 px-1">
        <h3 className="text-lg font-semibold">{restaurants.info.name}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
          <FaStar className="text-green-600" size={14} />
          <span>{restaurants.info.avgRating} • {restaurants.info.sla.slaString}</span>
        </div>

        <p className="text-sm text-gray-600 mt-1">{restaurants.info.cuisines}</p>

        <p className="text-sm text-gray-500">{restaurants.info.areaName}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
