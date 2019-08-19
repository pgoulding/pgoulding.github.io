import React from 'react'
import './Footer.css'
import linkedIN from '../../images/linkedin.png'
import github from '../../images/github-logo.png'
import twitter from '../../images/twitter.png'

const Footer = () => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/patrickgoulding/" className="logos" alt="patrick goulding linkedIN page"><img alt="" src={linkedIN}></img></a>
      <a href="https://github.com/pgoulding" className="logos" alt="patrick goulding github page"><img alt="Icon made by https://www.flaticon.com/authors/dave-gandy" src={github}></img></a>
      <a href="twitter.com/p_goulding" className="logos" alt="patrick goulding twitter page"><img alt="Icon made by Freepik from www.flaticon.com" src={twitter}></img></a>
    </footer>
  )
}

export default Footer
