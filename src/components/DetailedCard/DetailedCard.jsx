import React from 'react'
import './DetailCard.css'
import uuidv4 from 'uuid'

const DetailedCard = ({detailData}) => {
  return (
    <article className="detail-page">
      <h2>{ detailData.title }</h2>
      <p>{ detailData.description }</p>
      {detailData.links.map(link => {
        return <a key={uuidv4()} href={link.url}>{link.title}</a>
      })}
    </article>
  )
}

export default DetailedCard
