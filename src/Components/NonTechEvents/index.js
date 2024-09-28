import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'


const nonTechEvents =[
  {
    id: 'mobile-photography',
    event: 'Mobile Photography',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Stick to the allotted time, usually 10-15 minutes for the presentation and 5 minutes for Q&A.",
      'Ensure your presentation has a clear structure—Introduction, Methodology, Results, Conclusion.',
      'Use minimal text per slide, focusing on bullet points and visuals (graphs, diagrams, images) over paragraphs.',
      'Present complex ideas simply; avoid jargon unless necessary, and define any technical terms.',
      'Dress professionally and maintain good posture. Be confident in your delivery and maintain eye contact.',
      'Ask thought-provoking questions to the audience or use real-world examples to keep them engaged.',
      'Mention sources and references where necessary to establish credibility.',
      'Be respectful during the Q&A session, even if the questions are challenging. Respond clearly and concisely.',
      'Always carry a backup copy of your presentation on a USB and/or cloud storage.'
    ]
  },{
    id:'meme-contest',
    event: 'Meme Contest',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Stick to the allotted time, usually 10-15 minutes for the presentation and 5 minutes for Q&A.",
      'Ensure your presentation has a clear structure—Introduction, Methodology, Results, Conclusion.',
      'Use minimal text per slide, focusing on bullet points and visuals (graphs, diagrams, images) over paragraphs.',
      'Present complex ideas simply; avoid jargon unless necessary, and define any technical terms.',
      'Dress professionally and maintain good posture. Be confident in your delivery and maintain eye contact.',
      'Ask thought-provoking questions to the audience or use real-world examples to keep them engaged.',
      'Mention sources and references where necessary to establish credibility.',
      'Be respectful during the Q&A session, even if the questions are challenging. Respond clearly and concisely.',
      'Always carry a backup copy of your presentation on a USB and/or cloud storage.'
    ]
  },{
    id: 'non-tech-quiz',
    event: 'Non-Tech Quiz',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Stick to the allotted time, usually 10-15 minutes for the presentation and 5 minutes for Q&A.",
      'Ensure your presentation has a clear structure—Introduction, Methodology, Results, Conclusion.',
      'Use minimal text per slide, focusing on bullet points and visuals (graphs, diagrams, images) over paragraphs.',
      'Present complex ideas simply; avoid jargon unless necessary, and define any technical terms.',
      'Dress professionally and maintain good posture. Be confident in your delivery and maintain eye contact.',
      'Ask thought-provoking questions to the audience or use real-world examples to keep them engaged.',
      'Mention sources and references where necessary to establish credibility.',
      'Be respectful during the Q&A session, even if the questions are challenging. Respond clearly and concisely.',
      'Always carry a backup copy of your presentation on a USB and/or cloud storage.'
    ]
  },{
    id: 'short-flim-making',
    event: 'Short Flim',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Stick to the allotted time, usually 10-15 minutes for the presentation and 5 minutes for Q&A.",
      'Ensure your presentation has a clear structure—Introduction, Methodology, Results, Conclusion.',
      'Use minimal text per slide, focusing on bullet points and visuals (graphs, diagrams, images) over paragraphs.',
      'Present complex ideas simply; avoid jargon unless necessary, and define any technical terms.',
      'Dress professionally and maintain good posture. Be confident in your delivery and maintain eye contact.',
      'Ask thought-provoking questions to the audience or use real-world examples to keep them engaged.',
      'Mention sources and references where necessary to establish credibility.',
      'Be respectful during the Q&A session, even if the questions are challenging. Respond clearly and concisely.',
      'Always carry a backup copy of your presentation on a USB and/or cloud storage.'
    ]
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
