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
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727521498/paper_presentation_mobile_lzoumv.png" alt='events'/>
            <Link to="/events/tech_events">
              <button className='click-here-button'>Click Here</button>
            </Link>
          </div>
          <div className='technical-container'>
            <h3 className='events-subHeading'>Non-Technical</h3>
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727521316/non_tech_events_ly0wy9.jpg" alt='events'/>
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
