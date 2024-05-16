import React from 'react'

const Offer = ({index,src,link}) => {
  return (
             <a key={index} href={link} ><img src={src} alt={`${index} Offer`}/> </a>
  )
}

export default Offer
