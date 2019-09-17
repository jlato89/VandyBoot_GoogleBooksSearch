const router = require("express").Router();
const book = require("../models/Book.js");

router.get('/api/books', (req, res) => {
   res.json({ msg: 'Success' });
});

router.post('/api/books', (req, res) => {
   res.json({ msg: 'Success' });
});

router.delete('/api/books/:id', (req, res) => {
   res.json({ msg: 'Success' });
});

module.exports = router;
