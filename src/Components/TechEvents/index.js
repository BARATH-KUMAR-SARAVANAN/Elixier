import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'

const techEvents =[
  {
    id: 'PaperPresentation',
    event: 'Paper Presentation',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727720048/WhatsApp_Image_2024-09-30_at_23.44.01_2d186dcc_cwnwug.jpg',
  },{
    id:'ProjectPresentation',
    event: 'Project Presentation',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717463/WhatsApp_Image_2024-09-30_at_21.38.17_bab237c3_cq92yh.jpg',
  },{
    id: 'circuitDebugging',
    event: 'Circuit Debugging',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727718853/WhatsApp_Image_2024-09-30_at_23.21.01_621b6fe2_nsngcr.jpg',
  },{
    id: 'technicalQuiz',
    event: 'Technical Quiz',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717446/WhatsApp_Image_2024-09-30_at_21.26.45_9c301757_iunhnd.jpg',
  },
]

const TechEvents = () => {
  return (
    <div className='tech-events-page'>
      <Navbar/>
      <div className='tech-events-container'>
        <h1 className='tech-event-heading'>Technical Events</h1>
        <ul className='event-holder'>
          {
            techEvents.map(each =>{ 
              return(
            <li key={each.id} className='event-card'>
              <h1 className='event-heading'>{each.event}</h1>
              <img className='event-images' src={each.imgUrl} alt={each.event} />
                <Link  to={`/events/tech_events/${each.id}`}>
                  <button className='moreDetail-button'>More Detail</button>
                </Link>
            </li>)}
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default TechEvents
