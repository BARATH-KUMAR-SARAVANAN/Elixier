import {Component} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

class Home extends Component{
 
  render(){
    return (
      <div>
        <Navbar/>
        <div className='home-container'>
          <div className='home-profile'> 
            <img alt="backdrop" className='backdropPicture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1728063256/ELIXIR_PNG_kairov.png" />
            <p className='top-profile-text'>A National level technical festival which aims to bring the innovation and new ideas at 
            Government College of Engineering, Erode. Elixir Welcomes you to showcase your technical skills 
            and cutting edge ideas to the mankind. <br/><br/>
            The new experince is waiting for you ahead.......
            <br/>
            <br/>
            <span className='date'>On October 21 and 22 </span>
            </p>
            <Link to='/events'>
              <button className='events-button'>Events</button>
            </Link>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Home