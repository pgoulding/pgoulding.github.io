import React from 'react'
import './Card.scss'
import  { Link } from 'react-browser-router'

const Card = ({info}) => {

  return (
    <div className='card'>
      <img src={info.image_url} alt={info.title && ' image'}/>
      <Link to={info.page_url}>
        <h3>{info.title}</h3>
      </Link>
    </div>
  )
}

export default Card
