import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const Events = () => {
  return (
    <div className='events-page'>
      <Navbar/>
      <div className='events-container'>
        <h1 className='events-heading'>Events</h1>
        <div className='events-type-container'>
          <div className='technical-container'>
            <h3 className='events-subHeading'>Technical</h3>
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717459/WhatsApp_Image_2024-09-30_at_21.38.25_3944a7e7_up0zgk.jpg" alt='events'/>
            <Link to="/events/tech_events">
              <button className='click-here-button'>Click Here</button>
            </Link>
          </div>
          <div className='technical-container'>
            <h3 className='events-subHeading'>Non-Technical</h3>
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717463/Untitled_design_s2rczm.jpg" alt='events'/>
            <Link to="/events/non_tech_events">
              <button className='click-here-button'>Click Here</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
