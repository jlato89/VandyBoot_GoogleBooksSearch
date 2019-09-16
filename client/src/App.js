import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'
import SearchJumboTron from './components/bookSearch/SearchJumboTron'
import BookSearchForm from './components/bookSearch/BookSearchForm'
import ResultsContainer from './components/bookSearch/ResultsContainer'
import BookResults from './components/bookSearch/BookResults'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <SearchJumboTron />
        <BookSearchForm />
        <ResultsContainer />
        <BookResults />
      </div>
    )
  }
}

export default App;
