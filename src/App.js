import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import AppBar from './components/AppBar';
//import TopDrawer from './components/TopDrawer';

export default class App extends Component {
  c = 'Shubham'
  render() {
    return (
      <div>
        {/* <TopDrawer /> */}
        <NavBar />
        <News />
      </div>
    )
  }
}





