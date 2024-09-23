import React from 'react'
import './index.css'
import Navbar from '../Navbar'

const Events = () => {
  return (
    <div className='events-page'>
      <Navbar/>
      <div className='events-container'>
        <h1 className='events-heading'>Events</h1>
        <div className='events-type-container'>
          <div className='technical-container'>
            <h3 className='events-subHeading'>Technical</h3>
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727030350/IMG_20240111_111252_pf7lfi.jpg" alt='events'/>
          </div>
          <div className='technical-container'>
            <h3 className='events-subHeading'>Non-Technical</h3>
            <img className='technical-events-picture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727030350/IMG_20240111_111252_pf7lfi.jpg" alt='events'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
