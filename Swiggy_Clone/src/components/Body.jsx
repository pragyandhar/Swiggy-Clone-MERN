import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Filters from './Filters'
import Apicalling from './Apicalling'


const Body = () => {
  const allRestaurants = Apicalling()
  return (
    <div>
      <h2 className='my-4 mx-4 font-bold'>Restaurants with online food delivery in Delhi</h2>
      <Filters />
      <div className='flex flex-wrap gap-6 my-4 mx-4'>
        {
          allRestaurants.map((restaurant) => {
            <RestaurantCard restaurant = {restaurant}/>
          })
        }
      </div>
    </div>
  )
}

export default Body
