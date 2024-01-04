import React from 'react'
import Section from './foodsellers/Section'
import Section2 from './foodsellers/Section2'
// import Section4 from './foodsellers/Section4'

const FoodSellers = () => {
  return (
    <div className='bg-light App p-3'>
      <div className='text-start mb-3'>Food Sellers / Settings / Food Types</div>
      <div className='d-flex'>
       <Section />

        <Section2 />
       {/* <Section4 /> */}
      </div>
    </div>
  )
}

export default FoodSellers