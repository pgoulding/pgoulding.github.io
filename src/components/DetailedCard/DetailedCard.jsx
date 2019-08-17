import React from 'react'

const DetailedCard = ({detailData}) => {
console.log(detailData)
  return (
    <article>
      <h2>{ detailData.title }</h2>
      <p>{ detailData.description }</p>
      {detailData.links.map(link => {
        return <a href={link.url}>{link.title}</a>
      })}
    </article>
  )
}

export default DetailedCard
