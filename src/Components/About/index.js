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
          Elixir is a premier national-level technical symposium organized by the Department 
          of Electrical and Electronics Engineering at Government College of Engineering, Erode. 
          As a convergence point for engineering minds, Elixir serves as a catalyst for 
          groundbreaking innovation and technical discourse in the fields of Electrical, Electronics, 
          and allied engineering disciplines.
          <br/>
          Our symposium is designed to facilitate knowledge exchange on emerging technologies 
          such as Artificial Intelligence in Power Systems, IoT-based Automation, 
          Advanced Signal Processing, and Embedded System Design. 
          By focusing on cutting-edge developments like Smart Grids, Renewable Energy Integration, 
          and High-Efficiency Power Electronics, Elixir enables participants to engage with the future 
          of energy and electronics on both a theoretical and practical level.
          <br/>
          <br/>
          <span className='bolding-text'>
          THE EVENT FEATURES:<br/><br/>
          </span>
          <span className='bolding-text'>Paper Presentations: </span> 
          Showcasing researches and 
          innovative solutions addressing real-world 
          electrical and electronics engineering challenges.<br/>
          <span className='bolding-text'>Workshops: </span> 
          Hands-on experiences in the area of 
          Embedded Systems and IoT, helping participants 
          enhance their practical knowledge.
          <br/>
          <span className='bolding-text'>Expert Lectures: </span> 
          Industry leaders and academic 
          professionals will share insights 
          on transformative technologies and 
          their impacts and their knowledge
          <br/>
          <span className='bolding-text'>Competitions: </span> 
          Innovative design challenges and 
          technical quizzes that push 
          participants to apply core engineering 
          principles in problem-solving scenarios.
          <br/>
          <br/>
          Elixir is committed to equipping participants with the tools and knowledge to advance their technical expertise and contribute to the future of engineering, while also promoting collaboration between academia and industry.
         </p>
         
        <h1 className='about-heading'>ELIXIR'23 Memories</h1>
         <div className='images-container'>
          <img className='memories-image memories-image1' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727890318/cor12_hmgx16.jpg' alt='memories'/>
          <img className='memories-image memories-image2' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727890318/cor14_c53x8g.jpg' alt='memories'/>
          <img className='memories-image memories-image3' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727890318/cor1_n26iwh.jpg' alt='memories'/>
          <img className='memories-image memories-image4' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727890318/cor13_lzqfl6.jpg' alt='memories'/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default About
