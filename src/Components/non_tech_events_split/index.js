import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'

const NonTechEventsSplit = () => {
  return (
    <div className='non-tech-events-page'>
      <Navbar/>
      <div className='non-tech-events-container'>
        <h1 className='non-tech-event-heading'>Non-Technical Events</h1>
        <ul className='non-tech-event-holder'>
            <li key='short-flim-making' className='non-tech-event-card'>
              <h1 className='heading'>Short Flim</h1>
              <img className='non-tech-event-images' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727721976/create-a-funky-image-where-a-boy-is-taking-a-short_ye17xz.jpg' alt='Short Flim' />
              <Link  to={`/events/non_tech_events/short-flim-making`}>
                <button className='non-tech-moreDetail-button'>Click Here</button>
              </Link>
            </li>

            <li key='other-non-tech-events' className='non-tech-event-card'>
              <h1 className='heading'>Other Non-tech Events</h1>
              <img className='non-tech-event-images' src='https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727974484/nontech_orcruq.jpg' alt='Short Flim' />
              <Link  to={`/events/non_tech_events`}>
                <button className='non-tech-moreDetail-button'>Click Here</button>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default NonTechEventsSplit
