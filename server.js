const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from NodeJS App');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT}...`);
});