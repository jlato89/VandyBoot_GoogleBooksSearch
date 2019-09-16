import React, { Component } from 'react'

class BookSearch extends Component {
   render() {
      return (
         <form>
            <div className='form-group'>
               <label for='formGroupExampleInput'>
                  <h4>Book Search</h4>
               </label>
               <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput'
                  placeholder='Example input'
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