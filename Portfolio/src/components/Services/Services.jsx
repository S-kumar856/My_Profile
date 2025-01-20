import React from 'react';
import './Services.css';
import theme_pattern from "../../assets/theme_pattern.svg"

const Services = () => {
  return (
    <div className='services'>
    <div className="service-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="service_theme.jpg" />
    </div>
      
    </div>
  )
}

export default Services;
