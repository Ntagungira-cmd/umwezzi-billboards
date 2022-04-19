import React from 'react'
import SideNav from './sideNav';
import Navbar from './navBar';
import Stats from './stats';

export default function adminDashboard() {
  return (
    <>
    <body>
    <div>{<SideNav/>}</div>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">  
        <div>{<Navbar/>}</div>
        <div>{<Stats/>}</div>
    </main>
    </body>
       
    </>
  )
}
