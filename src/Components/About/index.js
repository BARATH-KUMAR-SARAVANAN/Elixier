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
          <span className='bolding-text'>Technical Paper Presentations:</span> Showcasing original research and 
          innovative solutions addressing real-world electrical and electronics engineering challenges.
          Workshops: Hands-on experiences in areas such as VLSI Design, PLC Automation, 
          and Embedded Systems, helping participants enhance their practical knowledge.
          <br/>
          <span className='bolding-text'>Expert Lectures:</span> Industry leaders and academic professionals will share insights 
          on transformative technologies such as Machine Learning in Control Systems, Quantum 
          Computing Applications in Electrical Engineering, and 5G Network Implementation.
          <br/>
          <span className='bolding-text'>Competitions:</span> Innovative design challenges and technical quizzes that push 
          participants to apply core engineering principles in problem-solving scenarios.
          <br/>
          Elixir is committed to equipping participants with the tools and knowledge to advance their technical expertise and contribute to the future of engineering, while also promoting collaboration between academia and industry.
         </p>
        </div>
      </div>
    </div>
  )
}

export default About
