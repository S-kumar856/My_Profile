import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo.svg" />
        <ul className="nav-menu">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Me</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Portfolio</li>
            <li className="nav-item">Contact</li>
        </ul>

        <div className="nav-connect">Connect With Me</div>
      
    </div>
  )
}

export default Navbar
