import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'
import JumboTron from './components/JumboTron'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <JumboTron />
      </div>
    )
  }
}


export default App;
