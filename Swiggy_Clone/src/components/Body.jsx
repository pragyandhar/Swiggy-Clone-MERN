import React from 'react'
import RestaurantCard from './RestaurantCard'
import Filters from './FIlters'


const Body = () => {
  return (
    <div>
      <h2 className='my-4 mx-4 font-bold'>Restaurants with online food delivery in Delhi</h2>
      <Filters />
      <div className='flex flex-wrap gap-6 my-4 mx-4'>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

export default Body
