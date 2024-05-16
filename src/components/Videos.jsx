import React from 'react'
import VideoCard from '../components/VideoCard.jsx'
import '../styles/videos.css'
const Videos = ({Videos}) => {
  return (
    <div className='videos'>
      {
        Videos.map((item,index)=>
        <VideoCard key={item.image} index={index} image={item.image} name={item.name}/>
        )
      }
    </div>
  )
}

export default Videos
