import React from 'react';
import './Services.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import services_data from "../../assets/services_data.js";
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    return (
        <div className='services'>
            <div className="service-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="service_theme.jpg" />
            </div>
            <div className="service-container">
                {services_data.map((service, index) => {
                    return (
                        <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="service-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="arrow.png" />
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Services;
