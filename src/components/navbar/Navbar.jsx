import React from 'react';
import { Link } from 'react-router-dom';
import { RiNotification3Line } from 'react-icons/ri';
import { BsChatLeft } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import avatar from '../../components/avatar.jpg';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '30px',
      }}
    >
      <div className="nav-link">
        <p>Application</p>
        <p>Dashboard</p>
      </div>
      <div className="left-bar">
        <div className="search-container">
          <input type="text" placeholder="Search..." className="input" />
          <div className="search-icon-container">
            <RiSearchLine className="search-icon" />
          </div>
        </div>

        <RiNotification3Line />
        <img
          src={avatar}
          alt=""
          style={{ borderRadius: '70px', width: '30px', height: '30px' }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
