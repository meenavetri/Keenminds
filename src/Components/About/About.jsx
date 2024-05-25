import React from 'react'
import './About.css';
import conference from '../../assets/conference.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={conference} alt="" className='about-img' />
        </div>
        <div className="about-right">
            <span>WHO WE ARE</span>
            <h1>Highly Tailored IT Design, Management & Support Services.</h1>
            <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
        </div>
    </div>
  )
}

export default About
