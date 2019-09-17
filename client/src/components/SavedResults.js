import React from 'react';

const SavedResults = (props) => {
   return (
      <div>
         {props.books.length ? (
            <div>
               {props.books.map(book => (
                  <div className='card border-secondary' style={{ width: '18rem' }}>
                     <img
                        className='card-img-top'
                        src='https://via.placeholder.com/150'
                        alt='Book Img'
                     ></img>
                     <div className='card-body'>
                        <h5 className='card-title'>{book.title}</h5>
                        <sub className='card-authors'>Written by: {book.authors}</sub>
                        <p className='card-text' style={{ paddingTop: '1rem' }}>
                           {book.description}
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
               ))}
            </div>
         ) : (
            <h5>No Results to Display</h5>
         )}
      </div>
   );
}

export default SavedResults;
