import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import SavedResults from '../components/SavedResults';

class Saved extends Component {
   state = {
      books: []
   };

   componentDidMount() {
      this.loadBooks();
   }

   loadBooks = () => {
      axios
         .get('/api/books')
         .then(res => {
            this.setState({
               books: res.data
            });
            console.log(this.state.books);
         })
         .catch(err => console.log(err));
   };

   render() {
      return (
         <div>
            <h3>Saved Results</h3>
            <SavedResults books={this.state.books} />
         </div>
      );
   }
}

export default Saved;
