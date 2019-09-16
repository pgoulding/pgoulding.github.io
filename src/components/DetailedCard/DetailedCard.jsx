import React from 'react'
import './DetailCard.css'
import uuidv4 from 'uuid'
import { Link } from 'react-browser-router'

const DetailedCard = ({detailData}) => {
  return (
    <>
    <article className="detail-page">
    <Link to="/" style={{textAlign:"center"}}>
      ←Back
    </Link>
      <h2>{ detailData.title }</h2>
        <div dangerouslySetInnerHTML={{ __html: detailData.description}}></div>
      {detailData.links.map(link => {
        return <a key={uuidv4()} href={link.url}>{link.title}</a>
      })}
    </article>
    </>
  )
}

export default DetailedCard
