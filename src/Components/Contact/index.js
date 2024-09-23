import React from 'react'
import Navbar from '../Navbar'
import './index.css'

const Contact = () => {
  const membersDetails = [
    {
    name:'Sujithkkumar',
    post:'Secretary',
    mobile:'123456789',
    mail: 'example@gmail.com'
  },{
    name:'TamilSelvan',
    post:'Treasurer',
    mobile:'123456789',
    mail: 'example@gmail.com'
  },{
    name:'Alex Pandiyan',
    post:'Co-ordinator',
    mobile:'123456789',
    mail: 'example@gmail.com'
  },{
    name:'Pavish',
    post:'Technical Head',
    mobile:'123456789',
    mail: 'example@gmail.com'
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
                <p className='contact-text'>{each.mail}</p>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Contact
