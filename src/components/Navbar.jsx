import React from 'react'
import '../styles/nav.css'
import {Link} from 'react-router-dom'
import {logo} from "../data/data.json"
const SearchIcons=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
const Navbar = () => {
  return (
   <div className='nav'>
     <div className='logo'>
     <Link to='/dsfd'>
     <a href="/">
              <img id="logoImage" src={logo} alt="Not" /> 
             </a>
     </Link>   </div>
     <Link className='navlinks' to='/miphones'>Mi Phones</Link>
     <Link className='navlinks' to='/redmimiphones'>Redmi Phones</Link>
     <Link className='navlinks' to='/tv'>Tv</Link>
     <Link className='navlinks' to="/laptop">Laptop</Link>
     <Link className='navlinks' to='/fitness&LifeStyle'>Fitness & LifeStyle</Link>
     <Link className='navlinks' to='/home'>Home</Link>
     <Link className='navlinks' to="/radio">Radio</Link>
     <Link className='navlinks' to='/accesseries'>Accesseries</Link>
     <div className='searchbox'>
    <input type="text" name="search" placeholder='Search Products' />
    <div className="search-icon">{SearchIcons}</div>
</div>

   </div>
  )
}

export default Navbar
