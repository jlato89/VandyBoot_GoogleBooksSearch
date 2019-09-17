const router = require("express").Router();
const Book = require("../models/Book.js");

router.get('/api/books', (req, res) => {
    Book.find({})
      .sort({ date: -1 })
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
});

router.post('/api/books', (req, res) => {
    Book.create(req.body)
       .then(books => res.json(books))
       .catch(err => res.status(422).json(err));

});

router.delete('/api/books/:id', (req, res) => {
   res.json({ msg: 'Success' });
});

module.exports = router;
