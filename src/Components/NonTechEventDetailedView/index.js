import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const nonTechEventDetailedView ={
 "mobile-photography": {
    coordinator:'Sharath Raj J K',
    contactNo:'7305188225',
    event: 'Vibe Capture',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
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
    coordinator:'Vishal P',
    contactNo:'8248631720',
    event: 'Meme Contest',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
    rules:
    [
      "Only engineering college students are allowed", 
      "College ID card is must ",  
      "Topic - yaar endru Terigiratha ( based on old tech Vs. new tech)",  
      "each participants must create a meme that is both troll and awareness meme", 
      "send your short copy as a document to 6379670588 on WhatsApp ", 
      "E-certificates will be provided",  
      "only register students are allowed", 
      "last date for registration October 19, 11PM",
    ]
  },
  'non-tech-quiz':{
    coordinator:'Saravana Sathish R',
    contactNo:'8778763236',
    event: 'Quizz Craze',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
    rules:
    [
      "Only engineering college students are allowed",
      "Must wear College ID card", 
      "There will be two rounds conducted round duration will be 20 and 15 minutes for two rounds",
      "The participants will not be allowed to use mobile phones are other electronics instrument", 
      "Only registered students are allowed", 
      "participation certificate will be provided to all participants", 
      "Replacement of any participants is not allowed after registration", 
      "Last date for registration October 19, 11PM"
    ]
  },
  'short-film-making':{
    coordinator:'Jaya Suriya S',
    contactNo:'9498405303',
    event: 'Micro Film',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSc0cIRYHhUgL5GAi9n6HuBtIakJtKV8kiLvkBeImlXTC7FFag/viewform?usp=sf_link',
    rules:
    [
      "Only engineering college students are allowed", 
      "Only register students are allowed", 
      "For Short Film Registration Fees is Rs.150/- per head",
      "College ID card is must", 
      "Duration of the short film is 15 to 20 minutes", 
      "Send your short film via WhatsApp number to 8248631720", 
      "last date for sending the short film is October 19, 11PM"
    ]
  },
  'logo-making':{
    coordinator:'Kishore R',
    contactNo:'6379670588',
    event: 'Logo Making',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
    rules:
    [
      "The logo should work well in color, black and white, grayscale, and inverted formats.",
      "Create the logo in apps like (e.g., Adobe Illustrator,canva,picart) to maintain quality at any size ",
      "Make sure the logo looks good on light, dark, and textured backgrounds.",
      "Choose fonts that are appropriate to the topic, and align with design.",
      "Imagine you are Starting a startup in Electrical and Electronics domain. Design the logo for that.",
      "Using stock images can cheapen your design and make it feel generic.",
      "Do not create a logo using any ai tools",
      "Avoid cramming in too much text or elements; simplicity is key.",
      "send your short copy as a document to 6379670588 on WhatsApp ", 
      "Must wear College ID card", 
      "participation certificate will be provided to all participants", 
    ]
  },
  'poster-presentation':{
    coordinator:'Kishore R',
    contactNo:'6379670588',
    event: 'Poster Presentation',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
    rules:
    [
      "Ensure the Poster looks good in all sizes",
      "The topic is open for poster presentation",
      "The Poster should work well in color, black and white, grayscale, and inverted formats.",
      "Create the Poster in apps like (e.g., Adobe Illustrator,canva,picart) to maintain quality at any size ",
      "Make sure the Poster looks good on light, dark, and textured backgrounds.",
      "Choose fonts that are appropriate to the topic.",
      "Overly intricate designs can be hard to understand at small sizes.",
      "Do not create a Poster using any ai tools",
      "send your short copy as a document to 6379670588 on WhatsApp ", 
      "Avoid cramming in too much text or elements; simplicity is key.",
      "Must wear College ID card", 
      "participation certificate will be provided to all participants", 
    ]
  },
  'iplAuction':{
    coordinator:'Yogesh S',
    contactNo:'9488605671',
    event: 'IPL Auction',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1728028205/ipl_auction_ltt4pt.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfvkL3hxnjmkvlGbEp6Cvoc1FUAk4jmVDXeMoWZt1jtw9fEkQ/viewform?usp=sf_link',
    rules:
    [
      "Only Engineering College students are allowed",
      "Only Registered Students are allowed",
      "College ID card is Must",
      "any one can participate",
      "Certificates will be provided to winning Team."
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
