import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccesseriesMenu.css'
const HotAccesseriesMenu = () => {
  return (
    <div className='HotAccesseriesMenu'>
      <Link className='HotAccesseriesMenuLink' to='/music'>Music Store</Link>
      <Link className='HotAccesseriesMenuLink' to='/smartDevice'>Smart Devices</Link>
      <Link className='HotAccesseriesMenuLink' to='/home'>Home</Link>
      <Link className='HotAccesseriesMenuLink' to='/lifeStyle'>LifeStyle</Link>
      <Link className='HotAccesseriesMenuLink' to='/mobileAccessories'>MobileAccesseries</Link>
    </div>
  )
}

export default HotAccesseriesMenu
