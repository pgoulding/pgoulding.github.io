import React, { Component } from 'react'
import { Route, Redirect, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer'
import { homePageLinks } from '../../data/portfolio'
import DetailedCard from '../DetailedCard/DetailedCard';
import uuidv4 from 'uuid'
export class App extends Component {

  populateRoutes = () => {
    return homePageLinks.map(link => {
      return (
        <Route path={link.page_url} render={()=> (
            <DetailedCard key={uuidv4()} detailData={link}/>
          )} 
        />
      )
    })
  }

  render() {
    return (
      <main>
        <Link to="/">
          <Header />
        </Link>
        <Route exact path="/" render={()=> (
          <Container data={homePageLinks} />
        )}/>
        {this.populateRoutes()}
        <Footer />
      </main>
    )
  }
}

export default App

