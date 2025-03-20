const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Importing JSON data
const courses = require('./data/data.json');

// API route to fetch JSON data
app.get('/api/data', (req, res) => {
    res.json(courses);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
