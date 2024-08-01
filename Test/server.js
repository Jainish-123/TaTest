// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.send('Hello, World Test!');
});

app.get('/test-1', (req, res) => {
  res.send('Hello, World Test 1!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
