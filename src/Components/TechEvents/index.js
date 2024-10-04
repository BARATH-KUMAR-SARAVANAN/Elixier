import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'

const techEvents = [
  {
    id: 'PaperPresentation',
    event: 'Call For Papers',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727720048/WhatsApp_Image_2024-09-30_at_23.44.01_2d186dcc_cwnwug.jpg'
  },
  {
    id:'ProjectPresentation',
    event: 'Tech Carnival',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717463/WhatsApp_Image_2024-09-30_at_21.38.17_bab237c3_cq92yh.jpg',
  },
  {
    id: 'circuitDebugging',
    event: 'Trouble Shooting',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727718853/WhatsApp_Image_2024-09-30_at_23.21.01_621b6fe2_nsngcr.jpg',
  },{
    id: 'technicalQuiz',
    event: 'Quizz bowl',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717446/WhatsApp_Image_2024-09-30_at_21.26.45_9c301757_iunhnd.jpg',
  },{
    id:'SpellTech',
    event: 'Spell Tech',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717466/WhatsApp_Image_2024-09-30_at_21.32.28_764bb0e2_w1uy4v.jpg',
  },{
    id: 'JustAMinute',
    event: 'Just A Minute',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717465/WhatsApp_Image_2024-09-30_at_21.32.58_11dabb52_xqxvsv.jpg',
  }
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
