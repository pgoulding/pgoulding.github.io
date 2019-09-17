import React from 'react'
import Card from '../Card/Card';
import './Container.css'
import { Link } from 'react-browser-router';


const Container = ({data}) => {
  const card = data.map(cardData => {
    return (
      <Link to={cardData.page_url}>
        <Card key={cardData.id} info={cardData}/>
      </Link>
    )
  })
  return (
    <div className='container'>
      { card }
    </div>
  )
}

export default Container
