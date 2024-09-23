import {Component} from 'react'
import Navbar from '../Navbar'
import './index.css'

class Home extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <div className='home-container'>
          <div className='home-profile'>
            <img alt="backdrop" className='backdropPicture' src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1726999643/backdrop_j0iqrh.jpg" />
            <p className='top-profile-text'>An Inter College technical festival which aims to bring the innovation and new ideas at 
            Government College of Engineering, Erode. Elixir Welcomes you to showcase your technical skills 
            and cutting edge ideas to the mankind. <br/><br/>
            The new experince is waiting for you ahead.......</p>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Home