import React from 'react'
import './Footer.css'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png';
const Footer = () => {
  return (
    <>
    <div className='footer container'>
    <div className="footer-content">
      <div className="footer-left">
        <h1>KEENMINDS</h1>
        <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
        <div className="icons">
        <img src={facebook} alt="" />
        <img src={twitter} alt=""/>
        <img src={linkedin} alt="" />
        </div>

      </div>
      <div className="footer-center">
        <h2>Our Services</h2>
        <ul className='hovereffect'>
          <li>Data security</li>
          <li>IT Management</li>
          <li>Out Sourcing</li>
          <li>Networking</li>
        </ul>
      </div>
      <div className='footer-right'>
        <h2>Contact Details</h2>
       <ul >
        <li><img src={mail} alt="" />Keenminds@gmail.com</li>
        <li><img src={phone} alt="" />+91 1234567890</li>
        <li><img src={location} alt="" />New York. 112 W 34th St caroline, USA</li>
       </ul>
      </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 keenminds - All rights Reserved</p>
    </div>
          
    </>
  )
}

export default Footer
