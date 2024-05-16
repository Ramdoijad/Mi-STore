import React from 'react'
import   '../styles/HotItemCards.css'
const HotItemCard = ({image,price,name,index}) => {
  return (
    <div className='HotItemCard'>
      <img src={image} alt={`${index} loading Card`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard
