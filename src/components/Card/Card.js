import React from 'react'
import './Card.css'

const Card = ({info}) => {
  return (
    <div className='card'>
      <img src={info.image_url} alt={info.title && ' image'}/>
      <h3>{info.title}</h3> 
    </div>
  )
}

export default Card
