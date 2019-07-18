import React, { Component } from 'react'
import { Route, Redirect, Link } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Container from '../Container/Container';

export class App extends Component {


  render() {
    return (
      <main>
        <Header />
        <Container data={[]}/>
      </main>
    )
  }
}

export default App

