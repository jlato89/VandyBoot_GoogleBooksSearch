import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BookSearchForm from '../components/BookSearchForm';
import BookResults from '../components/BookResults';

class Search extends Component {
   render() {
      return (
         <div>
            <BookSearchForm />
            <h3>Search Results</h3>
            <BookResults />
         </div>
      );
   }
}

export default Search;