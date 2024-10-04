import React from 'react'
import Navbar from '../Navbar'
import './index.css'

const Contact = () => {
  const membersDetails = [
    {
    name:'Yashvanth S',
    post:'Call For Papers',
    mobile:'9043241982',
  },{
    name:'Thillainathan M',
    post:'Tech Carnival',
    mobile:'6383220594',
  },{
    name:'Pavish S',
    post:'Workshop',
    mobile:'9894835807',
  },{
    name:'Yogesh S',
    post:'Trouble Shooting',
    mobile:'9488605671',
  },{
    name:'Saravana Sathish R',
    post:'Quizz Bowl',
    mobile:'8778763236',
  },{
    name:'Arvind R',
    post:'Spell Tech',
    mobile:'7448863380',
  },{
    name:'Boobalan D',
    post:'Just a Minute',
    mobile:'6383220594',
  },{
    name:'Yogesh S',
    post:'IPL Auction',
    mobile:'9488605671',
  },{
    name:'Saravana Sathish R',
    post:'Quizz Carze',
    mobile:'8778763236',
  },{
    name:'Jayasuriya S',
    post:'Micro Film',
    mobile:'9498405303',
  },{
    name:'Sanjid S',
    post:'Wibe Capture',
    mobile:'9025884300',
  },{
    name:'Vishal P',
    post:'Meme Contest',
    mobile:'8248631720',
  },{
    name:'Kishore R',
    post:'Logo Making ',
    mobile:'6379670588',
  },{
    name:'Kishore R',
    post:'Poster Presentation ',
    mobile:'6379670588',
  },
]
  return (
    <div className='contact-container'>
      <Navbar/>
      <div className='contacts-body-part'>
        <h1 className='contacts-heading'>Contacts</h1>
        <div className='contact-card'>
          <p className='contact-text'>Sujithkkumar R</p>
          <p className='contact-text'>Secretary</p>
          <p className='contact-text'>7010191662</p>
        </div>
        <div className='contact-card'>
          <p className='contact-text'>Alex Pandiyan</p>
          <p className='contact-text'>Co-Ordinator</p>
          <p className='contact-text'>7092273586</p>
        </div>
        <div className='contacts-holder'>
          {
            membersDetails.map(each=>(
              <div className='contact-card'>
                <p className='contact-text'>{each.name}</p>
                <p className='contact-text'>{each.post}</p>
                <p className='contact-text'>{each.mobile}</p>
              
              </div>
            ))
          }
          
        </div>
        <div className='map-container'>
          <h1 className='map-heading'>Location</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125148.47939435899!2d77.58554962001196!3d11.415530896317522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9699755561a47%3A0xb8c3c353be0ad19b!2sGovernment%20College%20of%20Engineering%2C%20Erode%20(IRTT%20%2FGCE-E)!5e0!3m2!1sen!2sin!4v1728061865452!5m2!1sen!2sin" 
          width="1200" height="450" 
          allowFullScreen="" 
          loading="lazy" 
          title='GCE ERODE Location'
          className='map-responsive'
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
