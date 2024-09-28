import React from 'react'
import Navbar from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'

const techEvents =[
  {
    id: 'PaperPresentation',
    event: 'Paper Presentation',
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
    id:'ProjectPresentation',
    event: 'Project Presentation',
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
    id: 'PaperPresentation2',
    event: 'Paper Presentation',
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
    id: 'ProjectPresentation2',
    event: 'Project Presentation',
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
              <h1 className='heading'>{each.event}</h1>
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
