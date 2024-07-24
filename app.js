const express = require('express');
const app = express();
const port = 3000;

// Define a route for GET requests
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'test api' });
});




// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
