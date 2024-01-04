import React, { useState } from 'react';
import Logo from '../assets/Logo.svg'
import {
    FaTh,
    FaCar,
    FaBars,
    FaCookieBite,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<FaRegChartBar/>
        },
        {
            path:"/foodsellers",
            name:"Food Sellers",
            icon:<FaCookieBite/>
        },
        {
            path:"/drivers",
            name:"Drivers",
            icon:<FaCar/>
        },
        {
            path:"/orderhistory",
            name:"Order History",
            icon:<FaShoppingBag/>
        },
        {
            path:"/faq",
            name:"Faq",
            icon:<FaCommentAlt/>
        },
        {
            path:"/generalsettings",
            name:"General Settings",
            icon:<FaThList/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className=""><img src={Logo} alt="Logo" className='logo'/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon"><button>{item.icon}</button></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text"><button>{item.name}</button></div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;