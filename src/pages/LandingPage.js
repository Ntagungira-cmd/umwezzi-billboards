import React from 'react'
import Header from '../components/header'
import "../styles/LandingPage.css"
import {FiDisc} from "react-icons/fi";

function LandingPage() {
  return (
    <div className="main">
      <Header/>
      <div className="content">
        <div className="text">
          <h1 className='prom-text'>Advertising with <br/>
          <span>Umwezi Media Consult</span> 
          <br/><FiDisc/>add value to your services.
          </h1>
        </div>
        <div className="video">
          <video>
            <source src=""/>
          </video>
        </div>
      </div>
    </div>
  )
}

export default LandingPage