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
                        <p>A Self-motivated, highly passionate, and hardworking person looking for an opportunity
                            to work in an organization to upgrade my skills and contribute for the growth of the organization.
                            I am an enthusiastic and quick learner with a fun, outgoing personality.</p>
                        <p>My Passion for software development is not only reflected in my
                            extensive experience but also in the enthusiam and dedication i bring to each project</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>ReactJS</p> <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>NodeJS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>ExpressJS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p> <hr style={{ width: "75%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Sql</p> <hr style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
