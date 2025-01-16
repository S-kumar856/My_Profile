import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>
    <img className='img' src={profile_img} alt="profile.png" />
    <h1> <span>I'm Sabavat Kumar</span>, software developer based in INDIA</h1>
    <p>I am a software developer from India with 1 year experience</p>
    <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
    </div>
      
    </div>
  )
}

export default Hero
