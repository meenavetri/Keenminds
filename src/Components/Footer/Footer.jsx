import React from 'react'
import './Footer.css'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png';
import logo from '../../assets/Logo.png'
const Footer = () => {
  return (
    <>
    <div className='footer container'>
    <div className="footer-content">
      <div className="footer-left">
        <img src={logo} alt="" className='logo'/>
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
        <li><img src={mail} alt="" />support@keenminds.in</li>
        <li><img src={phone} alt="" />+91 9025730630</li>
        <li><img src={location} alt="" />#811, 10th 'A' Main Road, Indira Nagar 1st Stage, Bangalore, Karnataka - 560038</li>
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
