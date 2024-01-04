import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SetMenu from './SetMenu'

const Profile = () => {
  return (
    <div className='d-lg-flex' style={{backgroundColor:'#D8D8D8'}}>
       <main className=" justify-content-between">
       <SetMenu/>
       </main>
    </div>
  )
}

export default Profile