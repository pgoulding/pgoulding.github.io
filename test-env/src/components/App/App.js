import React, { Component } from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer'
import { homePageLinks, recipes } from '../../data/portfolio'
import DetailedCard from '../DetailedCard/DetailedCard';
import uuidv4 from 'uuid'
export class App extends Component {

  populateRoutes = () => {
    return homePageLinks.map(link => {
      let id = uuidv4()
      return (
        <Route key={id+1} path={link.page_url} render={()=> (
            <DetailedCard key={id} detailData={link}/>
          )} 
        />
      )
    })
  }

  populateRecipes = () => {
    return recipes.map(recipe => {
      let id = uuidv4()
      return (
        <Route key={id + 2} path={recipe.page_url} render={() => (
            <DetailedCard key={id + 3} detailData={recipe} />
          )}
        />
      ) 
    })
  }

  render() {
    return (
      <HashRouter basename="/">
        <main>
          <Link to="/">
            <Header />
          </Link>
          <Route exact path="/" render={()=> (
            <Container data={homePageLinks} />
            )}/>
          {this.populateRoutes()}
          {this.populateRecipes()}
          <Footer />
        </main>
      </HashRouter>
    )
  }
}

export default App

