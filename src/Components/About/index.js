import React from 'react'
import Navbar from '../Navbar'
import './index.css'
const About = () => {
  return (
    <div>
      <Navbar/>
    <div className='about-container'>
        <h1 className='about-heading'>About ELIXIR'24</h1>
        <div className='about-content-container'>
          <p className='about-text'>
            The National-level Electrical and Electronics Engineering Symposium at 
            Government College of Engineering, Erode, 
            is a prestigious event that brings together students, researchers, 
            and industry professionals from across the country. 
            The symposium serves as a platform for sharing innovative 
            ideas, exploring emerging technologies, and engaging in technical discussions through 
            paper presentations, workshops, and competitions. 
            It fosters collaboration and offers a unique opportunity to gain insights 
            into the latest advancements in the field.
          </p>
          <img className='elixir-logo' alt="exlixirLogo" src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1726997531/gce_logo_swdssq.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default About
