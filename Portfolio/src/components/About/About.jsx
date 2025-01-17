import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Profile.jpg'
// import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="theme.jpg" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="sbout_profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugit error natus inventore obcaecati quaerat nulla excepturi. 
                        Molestias aut nesciunt deserunt.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, nisi?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{width:"80%"}} />
                        </div>
                        <div className="about-skill">
                            <p>ReactJS</p> <hr style={{width:"70%"}} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{width:"80%"}} />
                        </div>
                        <div className="about-skill">
                            <p>NodeJS</p> <hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p> <hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>ExpressJS</p> <hr style={{width:"50%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p> <hr style={{width:"75%"}} />
                        </div>
                        <div className="about-skill">
                            <p>Sql</p> <hr style={{width:"70%"}} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
