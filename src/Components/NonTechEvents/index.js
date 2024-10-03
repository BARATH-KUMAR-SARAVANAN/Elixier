import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'


const nonTechEvents =[
  {
    id: 'mobile-photography',
    event: 'Mobile Photography',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727721975/WhatsApp_Image_2024-10-01_at_00.10.09_ebc7acf4_re3coq.jpg',
  },{
    id:'meme-contest',
    event: 'Meme Contest',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727721976/WhatsApp_Image_2024-10-01_at_00.11.17_457d46da_tyaml5.jpg',
  },{
    id: 'non-tech-quiz',
    event: 'Non-Tech Quiz',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717455/WhatsApp_Image_2024-09-30_at_21.27.21_c3341e62_raiu8k.jpg',
  },{
    id: 'logo-making',
    event: 'Logo Making',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727717455/WhatsApp_Image_2024-09-30_at_21.27.21_c3341e62_raiu8k.jpg',
  },{
    id: 'poster-presentation',
    event: 'Poster Presentation',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727721976/create-a-funky-image-where-a-boy-is-taking-a-short_ye17xz.jpg'
  },{
    id: 'iplAuction',
    event: 'IPL Auction',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1727721976/create-a-funky-image-where-a-boy-is-taking-a-short_ye17xz.jpg'
  },
  
]
const NonTechEvents = () => {
  return (
    <div className='non-tech-events-page'>
      <Navbar/>
      <div className='non-tech-events-container'>
        <h1 className='non-tech-event-heading'>Non-Technical Events</h1>
        <ul className='non-tech-event-holder'>
          {
            nonTechEvents.map(each =>{ 
              return(
            <li key={each.id} className='non-tech-event-card'>
              <h1 className='heading'>{each.event}</h1>
              <img className='non-tech-event-images' src={each.imgUrl} alt={each.event} />
                <Link  to={`/events/non_tech_events/${each.id}`}>
                  <button className='non-tech-moreDetail-button'>More Detail</button>
                </Link>
            </li>)}
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default NonTechEvents
