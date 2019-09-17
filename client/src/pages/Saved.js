import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import SavedContainer from '../components/booksSaved/SavedContainer';
import SavedResults from '../components/booksSaved/SavedResults';

class App extends Component {
   render() {
      return (
         <div className='app'>
            <SavedContainer />
            <SavedResults />
         </div>
      );
   }
}

export default App;
