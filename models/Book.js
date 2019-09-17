const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   authors: [
      {
         type: String,
         required: true
      }
   ],
   description: {
      type: String,
      required: true
   },
   image: {
      type: String
   },
   link: {
      type: String
   }
});

module.exports = Book = mongoose.model('books', BookSchema);