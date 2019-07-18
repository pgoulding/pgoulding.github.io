import React from 'react'
import Card from '../Card/Card';
import './Container.css'
const Container = ({ data }) => {
  const card = data.map(cardData => {
    return <Card key={cardData.id} info={cardData}/>
  })
  return (
    <div className='container'>
      { card }
    </div>
  )
}

export default Container
