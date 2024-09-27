import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'
const techEvents = {
  PaperPresentation: {
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
  },
  ProjectPresentation: {
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
  PaperPresentation2:{
    event: 'Paper Presentation2',
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
  ProjectPresentation2:{
    event: 'Project Presentation2',
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
        <div>
          <h1>{eve.event}</h1>
          <ul>
            {
              eve.rules.map(each => <li key={each}>{each}</li>)
            }
          </ul>
        </div>
      </div>
    )
}
export default EventDetailedView
