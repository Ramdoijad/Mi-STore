import React from 'react'
import '../styles/ProductPreviewCard.css'
const ProductPreviewCard = ({image,price,index,name,review}) => {
  return (
    <div className='ProductPreviewCard'>
      <img src={image} alt={`${index} images`}/>
      <h5>{review}</h5>
       <span>{name}</span>
       <b>{price}</b>
    </div>
  )
}

export default ProductPreviewCard
