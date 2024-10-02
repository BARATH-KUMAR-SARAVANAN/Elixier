import './index.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav className="navbar-container">
      <Link className='link-item' to="/">
      <img className='navbar-logo' alt="exlixirLogo" src="https://res.cloudinary.com/dt9nmt0n0/image/upload/v1726997531/gce_logo_swdssq.jpg"/>
      </Link>
      <ul className='navbar-menu'>
        <Link className='link-item' to="/">
          <li className='navbar-list-item'>Home</li>
        </Link>
        <Link className='link-item' to="/about">
          <li className='navbar-list-item'>About</li>
        </Link>
        <Link className='link-item' to="/events">
        <li className='navbar-list-item'>Events</li>
        </Link>
        <Link className='link-item' to="/contact">
        <li className='navbar-list-item navbar-list-last'>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar