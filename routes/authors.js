const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// All authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
});

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()});
});

// Create Author Route
router.post('/', () => {
    res.send('Create');
});

module.exports = router;