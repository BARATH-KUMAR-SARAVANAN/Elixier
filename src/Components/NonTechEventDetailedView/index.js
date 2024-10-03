import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const nonTechEventDetailedView ={
 "mobile-photography": {
    coordinator:'Sanjid S',
    contactNo:'9025884300',
    event: 'Mobile Photography',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Mobile model must be mentioned",
      "Image format-JPEG/JPG image title (optional)",
      "Only Images taken on mobile phones will be accepted",
      "Cropping/Corrections of brightness, contrast, White balance and enhancing the quality are permitted",
      "Images with mixing/merging of two or more images, adding/deleting contents from the original will be disqualified",
      "If demanded, participants must produce the original soft copy of the photo for verification ",
      "Send your soft copy via whats app to 7305188225",
      "Last date for sending the image oct 18 2024"
    ]
  },
  'meme-contest':{
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
    event: 'Meme Contest',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Only engineering college students are allowed", 
      "College ID card is must ",  
      "Topic - yaar endru Terigiratha ( based on old tech Vs. new tech)",  
      "each participants must create a meme that is both troll and awareness meme", 
      "send your short copy as a document to _____________  on WhatsApp ", 
      "E-certificates will be provided",  
      "only register students are allowed", 
      "last date for registration October"
    ]
  },
  'non-tech-quiz':{
    coordinator:'Saravana Sathish R',
    contactNo:'8778763236',
    event: 'Non-Tech Quiz',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Only engineering college students are allowed",
      "Master wear College ID card", 
      "There will be two rounds conducted round duration will be 20 and 15 minutes for two rounds",
      "The participants will not be allowed to use mobile phones are other electronics instrument", 
      "Only registered students are allowed", 
      "participation certificate will be provided to all participants", 
      "Replacement of any participants is not allowed after registration", 
      "Last date for registration October ____"
    ]
  },
  'short-flim-making':{
    coordinator:'Jaya Suriya ',
    contactNo:'9498405303',
    event: 'Short Flim',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Only engineering college students are allowed", 
      "Only register students are allowed", 
      "College ID card is must", 
      "Duration of the short film is 15 to 20 minutes", 
      "Send your short coffee via WhatsApp number to _______", 
      "last date for sending the short film"
    ]
  },
  'logo-making':{
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
    event: 'Logo Making',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://www.youtube.com/',
    rules:
    [
      "Keep it Simple: A clean and minimalistic design is more versatile and easier to recognize.",
      "Ensure the logo looks good in all sizes",
      "Use Relevant Imagery: Incorporate elements that reflect the given topics ",
      "The logo should work well in color, black and white, grayscale, and inverted formats.",
      "Choose Appropriate Colors: Use colors that evoke the right emotions",
      "Create the logo in apps like (e.g., Adobe Illustrator,canva,picart) to maintain quality at any size ",
      "Make sure the logo looks good on light, dark, and textured backgrounds.",
      "Choose fonts that are legible, appropriate to the topic, and align with the overall logo design.",
      "Avoid Complexity: Overly intricate designs can be hard to reproduce and understand at small sizes.",
      "Using stock images can cheapen your design and make it feel generic.",
      "Do not create a logo using any ai tools .",
      "Don't Overcrowd the Logo: Avoid cramming in too much text or elements; simplicity is key.",
      "Only engineering college students are allowed",
      "Master wear College ID card", 
      "Only registered students are allowed", 
      "participation certificate will be provided to all participants", 
      "Replacement of any participants is not allowed after registration", 
    ]
  },
  'poster-presentation':{
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
    event: 'Poster Presentation',
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
  'iplAuction':{
    coordinator:'Sujithkkumar',
    contactNo:'01234567890',
    event: 'Poster Presentation',
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
  }
}

const NonTechEventDetailedView = () => {

  const params = useParams();
  const eventId =params.id;
  const eve = nonTechEventDetailedView[eventId]
  
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
export default NonTechEventDetailedView
