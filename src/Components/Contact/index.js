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
      </div>
    </div>
  )
}

export default Contact
