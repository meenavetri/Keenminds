import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [menu,setMenu]=useState(false);
  const toggleMenu =()=>{
    menu?setMenu(false):setMenu(true);
  }
  
  return (
   <nav className={`container ${sticky?'dark-nav':''}`}> 
        <h1 className='heading'>KEENMINDS</h1>
        <ul className={menu?'':'hide-menu'} >
            <li><Link to='landingpage' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='services' smooth={true}  offset={-260}>Our Services</Link></li>
            <li><Link to='about' smooth={true}  offset={-150} duration={500}>Aboutus</Link></li>
            <li><Link to='tesimonials' smooth={true}  offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='footer' smooth={true}  offset={-260} duration={500}><button className='btn'>Contactus</button></Link></li>
            
        </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
   </nav>
  )
}

export default Navbar

