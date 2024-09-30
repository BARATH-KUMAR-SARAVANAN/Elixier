import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'
const techEvents = {
  PaperPresentation: {
    event: 'Paper Presentation',
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
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
  ProjectPresentation: {
    event: 'Project Presentation',
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
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
  circuitDebugging:{
    event: 'Circuit Debugging',
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
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
  technicalQuiz:{
    event: 'Technical Quiz',
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
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
}

const EventDetailedView = () => {
  const params = useParams();
  const eventId =params.id;
  const eve = techEvents[eventId]
    return(
      <div>
        <Navbar/>
        <div className='eventDetailedViewContainer'>
          <h1 className='detailedViewHeading'>{eve.event}</h1>
          <ul className='rulesContainer'>
            {
              eve.rules.map(each => <li className='rulesElement' key={each}>{each}</li>)
            }
          </ul>
          <div className='eventCoordinatorCard'>
            <p className='coordinatorText'>Event Coordinator</p>
            <p className='coordinatorText'>{eve.coordinator}</p>
            <p className='coordinatorText'>{eve.contactNo}</p>
          </div>
          <a className='link' target='_blank' rel='noopener noreferrer' href={eve.googleFormLink}>Registration Link</a>
        </div>
      </div>
    )
}
export default EventDetailedView
