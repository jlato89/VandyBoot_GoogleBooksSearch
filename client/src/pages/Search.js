import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SearchJumboTron from '../components/bookSearch/SearchJumboTron';
import BookSearchForm from '../components/bookSearch/BookSearchForm';
import ResultsContainer from '../components/bookSearch/ResultsContainer';
import BookResults from '../components/bookSearch/BookResults';

class App extends Component {
   render() {
      return (
         <div className='app'>
            <SearchJumboTron />
            <BookSearchForm />
            <ResultsContainer />
            <BookResults />
         </div>
      );
   }
}

export default App;