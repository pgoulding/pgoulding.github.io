import React from 'react'
import Card from '../Card/Card';

const Container = ({ data }) => {
  const card = data.map(cardData => {
    return <Card key={cardData.id} />
  })
  return (
    <div className='container'>
      { card }
    </div>
  )
}

export default Container
