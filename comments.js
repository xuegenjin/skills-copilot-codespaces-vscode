// Create web server
const express = require('express');
const app = express();

// Create a route handler for GET requests to /greeting
app.get('/greeting', function(req, res) {
  res.send('Hello World!');
});

// Start the server listening on port 3000
app.listen(3000, function() {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

