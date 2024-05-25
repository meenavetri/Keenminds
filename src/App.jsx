import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landingpage from './Components/Landingpage/Landingpage'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'




function App() {

  return (
    <>
      <Navbar/>
      <Landingpage/>
      <div className='container'>
      <Title  title='Our Services Includes'/>
      <Services/>
      <Title title='About Us'/>
      <About/>
      <Title title="Testimonials"/>
      <Testimonials/>
      </div>
      <Title title="Conatct us"/>
      <Footer/>
    </>
  )
}

export default App
