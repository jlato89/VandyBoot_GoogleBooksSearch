import React, { Component } from 'react'

class BookSearch extends Component {
   render() {
      return (
         <form>
            <div className='form-group'>
               <h4>Book Search</h4>
               <input
                  type='text'
                  className='form-control'
                  placeholder='Start your search here'
               ></input>
               <button 
               type='submit' 
               className='btn btn-primary'
               style={{float: 'right'}}
               >Search
               </button>
            </div>
         </form>
      );
   }
}

export default BookSearch;