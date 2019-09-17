import React, { Component } from 'react';

class BookResults extends Component {
   render() {
      return (
         <div className='card border-secondary' style={{ width: '18rem' }}>
            <img
               className='card-img-top'
               src='https://via.placeholder.com/150'
               alt='Book Img'
            ></img>
            <div className='card-body'>
               <h5 className='card-title'>Book Title</h5>
               <sub className='card-authors'>Written by:</sub>
               <p className='card-text' style={{ paddingTop: '1rem' }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
               </p>
               <div className='row justify-content-between'>
                  <a href='/' className='btn btn-primary col-5'>
                     View
                  </a>
                  <a href='/' className='btn btn-primary col-5'>
                     Save
                  </a>
               </div>
            </div>
         </div>
      );
   }
}

export default BookResults;
