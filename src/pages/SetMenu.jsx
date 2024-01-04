import React from 'react'
import '../styles/setmenu.css'
import {
    UserCheck2Icon,
    UnlockKeyhole,
    SquareUserRound,
    BadgeDollarSign,
    MoreHorizontal,
  } from 'lucide-react';

const SetMenu = () => {
    const Menu = [
        {title: "Account Settings", icon:<SquareUserRound size={25}/>, href:"/Account"},
        {title: "Personal Information", icon:<UserCheck2Icon size={25}/>, href:"/User"},
        {title: "Change Password", icon:<UnlockKeyhole size={25}/>, href:"/Password"},
        {title: "Saved Payment Method", icon:<BadgeDollarSign size={25}/>, href:"/Payment"},
      ]
  return (
   
    <>
    <div>
    <main className="App">
    <div className='h-90 mt-20 mx-10'>
      <nav className='mr-3 ml-20 flex-col bg-white' style={{ width: '400px', height: '350px', border: '1px groove'}}>
        <div className='p-3 d-flex align-items-center '>
        <img
              className=" imgProfileStyle  lh-base w-25 rounded-pill"
              src="http://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
            <div className=''>
            <h4 className="font-bold">Phantom Sam</h4>
            <span className="text-xs text-grey">Manager</span>
            </div>
            <ul className="px-3"></ul>
            <div className="flex justify-between items-center ml-3">
              <div>
                  <MoreHorizontal size={20}/>
              </div>
            </div>
        </div>
        <ul className='pt-3'>
          {Menu.map((menu, index)=>(
            <li key={index} 
            className={'text-bold-500 text-black flex gap-x-10 cursor-pointer p-2 pl-2 hover:bg-blue-300 rounded-md'}>
               <a href={menu.href} className="d-flex gap-x-3 mr-5 text-black" style={{textDecoration:'none'}} activeClassName="active">
               {menu.icon}
               {menu.title}
               </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </main>
    </div>
</>
  )
}

export default SetMenu