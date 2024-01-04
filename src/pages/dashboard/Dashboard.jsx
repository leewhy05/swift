import React from 'react';
import GoogleMapComponent from '../../components/google/GoogleMapComponent';
import RightSideBar from '../../components/bar/RightSideBar';

const Dashboard = () => {
  return (
    <div className="board">
      <GoogleMapComponent />
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
