const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello');
  } catch (err) {
    //Error will be handled by the error handling middleware
    next(err);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong');
  }
} 