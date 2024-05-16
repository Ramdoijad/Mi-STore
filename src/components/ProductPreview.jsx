import React from 'react'
import ProductPreviewCard from '../components/ProductPreviewCard.jsx'
import '../styles/ProductPreview.css'
const ProductPreview = ({productpreview}) => {
  return (
    <div className='ProductPreview'>
      {
        productpreview.map((item,index)=>
        <ProductPreviewCard key={item.image} index={index} price={item.price} image={item.image} name={item.name} review={item.review} />
        )
      }
    </div>
  )
}

export default ProductPreview
