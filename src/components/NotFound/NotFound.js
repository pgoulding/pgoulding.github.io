import React from 'react'
import notTheDroids from '../../images/not-the-droids.gif'
import { Link } from 'react-browser-router'
const NotFound = () => {

  const styleBlock= {
    margin:"auto",
    minWidth: 200,
    maxWidth:"40%"
  }
  
  return (
    <div style={styleBlock}>
      <img src={notTheDroids} alt="These are not the droids you're looking for - scene from Star Wars Episode IV, A New Hope" />
      <h3>
        This is not the page you're looking for.
        <Link to="/">
          Move Along
        </Link>
      </h3>
    </div>
  )
}

export default NotFound
