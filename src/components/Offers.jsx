import React from 'react'
import Offer from './Offer' 
import '../styles/Offers.css'

const Offers = ({offer}) => {
    console.log("offerr----->",offer)
  return (
    <div className='offerSelection'>
     {
        offer.map((item,index)=>
         <Offer key={item.index} index={index} src={item.image} link={item.url} ></Offer>
        )
     }
    </div>
  )
}

export default Offers
