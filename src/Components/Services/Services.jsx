import React from 'react'
import './Services.css'
import cloud_img from '../../assets/cloud.png'
import cyber from '../../assets/security.png'
import blockchain from '../../assets/block.png'
import infrastructure from '../../assets/infrastructure.png'
const Services = () => {
  return (
    <div className='services '>
        <div className='service'>
            <img src={cloud_img} alt="" />
            <h3>INFRASTRUCTURE TECHNOLOGY</h3>
            <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
            <button >Read more</button>
        </div>
        <div className='service'>
            <img src={cyber} alt="" />
            <h3>IT Consultancy & solution</h3>
            <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
            <button >Read more</button>
        </div>
        <div className='service'>
            <img src={blockchain} alt="" />
            <h3>Cloud managed services</h3>
            <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
            <button >Read more</button>
        </div>
        <div className='service'>
            <img src={infrastructure} alt="" />
            <h3>Blockchain technology</h3>
            <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent.</p>
            <button >Read more</button>
        </div>
    </div>
  )
}

export default Services
