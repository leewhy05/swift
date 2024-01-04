import React, { useState } from 'react'
import { RiRestaurant2Line } from "react-icons/ri";
import { LuMenuSquare } from "react-icons/lu";
import { RiRestaurantLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsPercent } from "react-icons/bs";
import { LuThumbsUp } from "react-icons/lu";

const Section = () => {
  const [isactive, setisactive] = useState(true)

  const menuObj = [
    
    {
      icons: <LuMenuSquare />,
      name: "Menu Fliters",
    },
    {
      icons: <RiRestaurantLine />,
      name: "Cuisines Management",
    },
    {
      icons: <GiSettingsKnobs />,
      name: "Additional Fliter",
    },
    {
      icons: <BsPercent />,
      name: "Restaurant Fess",
    },
    {
      icons: <LuThumbsUp />,
      name: "Review Setting",
    }
  ]

  return (
    <div className='container bg-white  p-3 rounded-2 d-flex flex-column left'>
      <button className='btn btn-primary text-start ps-4'><RiRestaurant2Line /> Food Types</button>
      {menuObj.map((item, i) => (

        <button className='btn text-start ps-0' key={i} >{item.icons} {item.name}</button>
      ))}

    </div>
  )
}

export default Section