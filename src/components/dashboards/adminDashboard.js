import React from 'react'
import SideNav from './sideNav';
import Navbar from './navBar';
import Stats from './stats';

export default function adminDashboard() {
  return (
    <>
        <div>{<SideNav/>}</div>
        <div>{<Navbar/>}</div>
        <div>{<Stats/>}</div>
    </>
  )
}
