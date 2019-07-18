import React, { Component } from 'react'
import { Route, Redirect, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Footer from '../Footer/Footer'
import portfolio from '../../data/portfolio'

export class App extends Component {


  render() {
    return (
      <main>
        <Header />
        <Container data={portfolio}/>
        <Footer />
      </main>
    )
  }
}

export default App

