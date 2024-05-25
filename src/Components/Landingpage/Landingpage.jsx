import React from 'react'
import './Landingpage.css'
import arrow from '../../assets/dark-arrow.png'
const Landingpage = () => {
  return (
    <div className='landingpage container'>
      <div className='landingpage-text'>
        <p>TECHNOLOGY RELETED CONSULTANCY</p>
        <h1>We transform ideas into technology</h1>
        <p>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
        <button className='btn'>Read More <img src={arrow}/></button>
      </div>
    </div>
  )
}

export default Landingpage
