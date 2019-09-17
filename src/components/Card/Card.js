import React from 'react'
import './Card.scss'
import  { Link } from 'react-browser-router'

const Card = ({info}) => {

  const makeScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  return (
    <>
    {makeScript}
    <div className='card'>
      <img src={info.image_url} alt={info.title && ' image'}/>
      <Link to={info.page_url}>
        <h3>{info.title}</h3>
      </Link>
    </div>
    </>
  )
}

export default Card
