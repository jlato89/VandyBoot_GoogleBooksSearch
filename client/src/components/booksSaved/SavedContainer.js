import React, { Component } from 'react'
import axios from 'axios'

class SavedContainer extends Component {
   state = {
      books: []
   };

   componentDidMount() {
      this.loadBooks();
   }

   loadBooks = () => {
      axios.get("/api/books")
         .then(res => {
            this.setState({
               books: res.data
            })
            console.log(this.state.books);
         }
         )
         .catch(err => console.log(err));
   };

   render() {
      return (
         <div>
            <h3>Saved Results</h3>
         </div>
      );
   }
}

export default SavedContainer;
