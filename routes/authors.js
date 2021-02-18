const express = require('express');
const router = express.Router();

// All authors Route
router.get('/', (req, res) => {
    res.render('authors/index');
});

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new');
});

// Create Author Route
router.post('/', () => {
    res.send('Create');
});

module.exports = router;