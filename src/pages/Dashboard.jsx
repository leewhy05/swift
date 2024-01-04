import React from 'react';
import '../styles/dashboard.css'
import GoogleMapComponent from '../components/google/GoogleMapComponent';
import RightSideBar from '../components/bar/RightSideBar';
import Navbar from '../components/navbar/Navbar';

const Dashboard = () => {
    return (
      <div className='w-100'>
        <div>
            <Navbar/>
        </div>
          <div className='d-flex justify-content-between align-items-cente gap-1 w-100'>
           
          <GoogleMapComponent/>
          
           <div>
           <RightSideBar />
           </div>
        </div>
      </div>
    );
};

export default Dashboard;