import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import FoodSellers from './pages/FoodSellers.jsx';
import Users from './pages/Users.jsx';
import Drivers from './pages/Drivers.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import Faq from './pages/Faq.jsx'
import GeneralSettings from './pages/GeneralSettings.jsx'
import Account from './components/Account.jsx';
import Password from './components/Password.jsx';
import Payment from './components/Payment.jsx';
import User from './components/User.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/foodsellers" element={<FoodSellers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/faq" element={<Faq />} />
          <Route path='/generalsettings' element={<GeneralSettings/>}/>
          <Route path='/account' element={<Account/>}/> 
          <Route path='/password' element={<Password/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/user' element={<User/>}/>
         

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;