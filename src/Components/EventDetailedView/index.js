import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'
const techEvents = {

  PaperPresentation: {
    event: 'Paper Presentation',
    coordinator:'YASHVANTH S',
    contactNo:'9043241982',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLScmPrq5uqBAkNowkqpJOMCqPzHvXPvg1GEsXlGxJ6at996HwA/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "Language of Presentation must be in ENGLISH only.",
      "A College can send any number of teams with no more than 3 students per team.",
      "All Participants are allowed to use a maximum of 10 Slides, including Participant Details.",
      "The Maximum time limit for each team is 5 minutes.",
      "Topics must be selected from the topics given below.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Replacements of Team members are not allowed after registration.",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm",
      "Send your Abstract to gceelixir@gmail.com with team members Name and college name"
    ]
  },
  ProjectPresentation: {
    event: 'Project Presentation',
    coordinator:'THILLAI NATHAN M',
    contactNo:'6383220594',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSeReVeMRKcZ77M9b8oCLFlKM4d8_zIEUclBcqba9XLzhWLwWw/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "A College can send any number of teams with 3-4 students per team.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Replacements of Team members are not allowed after registration.",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm",
      "You Can show Case your Project Prototype or model here along with your Presentations",
      "Winners will Receive a CASH PRIZE",
      "Minimum 5 to maximum 10 slides should be there for presenting the Project"
    ]
  },
  circuitDebugging:{
    event: 'Circuit Debugging',
    coordinator:'YOGESH S',
    contactNo:'9488605671',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSe6BlDdCG7qLYgCR3UP3t7BmkdgrNX0IykaqPILGC_OsX4E_w/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "There will be two rounds.",
      "Each round will be around 10 minutes.",
      "We will provide A4 sheets with CIRCUIT DIAGRAMS containing HIDDEN ERRORS.",
      "Identify the Errors and provide precise solutions.",
      "Test your Electronics knowledge and problem-solving skills.",
      "The participants will not be allowed to use mobile or other electronic instruments.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm.",
      "Additionally you can also participate either Tech Quiz, Spell Tech, or Just A Minute.",
      "Participation certificates will be provided to all participants."
    ]
  },
  technicalQuiz:{
    event: 'Technical Quiz',
    coordinator:'SARAVANA SATHISH R',
    contactNo:'8778763236',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfmkfwowOfupyFaYD9z93VX7Oiuwti6Fs1pptboUJqFCymvHg/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "There will be two rounds.",
      "Each round will be around 20 minutes and 15 minutes respectively.",
      "The participants will not be allowed to use mobile or other electronic instruments.",
      "Only Engineering College students can participate.",
      "Replacements of Team members are not allowed after registration.",
      "Only Registered students must participate.",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm.",
      "Additionally you can also participate either Circuit Debugging, Spell Tech, or Just A Minute.",
      "Participation certificates will be provided to all participants."
    ]
  },
  SpellTech: {
    event: 'Spell Tech',
    coordinator:'ARVIND R',
    contactNo:'7448863380',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSdR-8jlBqnKXbwvF91HDb4bt53D-PnrwVFPrMxlF-NBdTWsEA/viewform?usp=sf_link',

    rules:
    [
      "College ID card is REQUIRED.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Replacements of Team members are not allowed after registration.",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm",
    ]
  },
  JustAMinute:{
    event: 'Just A Minute',
    coordinator:'BOOBALAN D',
    contactNo:'9942817568',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLSfJaQ6L7vRBIbPt9EdWIyitmpR_wWp99YjYXnJod0R-iPTlDQ/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Participants are given a technical related topic on the spot.",
      "The Participant must speak for exactly ONE MINUTE on the topic",
      "Judges Typically analyse your performance based on the correctness, fluency, coherence, and the ability to stay within the rules",
      "Registration Fees is Rs. 200/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm.",
      "Additionally you can also participate either Tech Quiz, Spell Tech, or Circuit Debugging.",
      "Participation certificates will be provided to all participants."
    ]
  },
  Workshop:{
    event: 'IoT And Embedded Workshop',
    coordinator:'Pavish S',
    contactNo:'9894835807',
    imgUrl:'https://res.cloudinary.com/dt9nmt0n0/image/upload/v1682769737/pexels-pixabay-53464_pzgmds.jpg',
    googleFormLink:'https://docs.google.com/forms/d/e/1FAIpQLScnTW6nXtCsJroCsklU3jiMwgbj4IudCaxDOEJ8vxep4W3Dpw/viewform?usp=sf_link',
    rules:
    [
      "College ID card is REQUIRED.",
      "Only Engineering College students can participate.",
      "Only Registered students must participate.",
      "Registration Fees is Rs. 300/- per head.",
      "Last Date for registration: OCTOBER 19 at 11pm.",
      "Participation certificates will be provided to all participants."
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
          <h1 className='detailedViewHeadings'>{eve.event}</h1>
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
