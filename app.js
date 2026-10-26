const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

// Integrate the middleware globally
app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});