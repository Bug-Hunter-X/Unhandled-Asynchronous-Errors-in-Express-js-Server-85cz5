const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling that doesn't properly send an error response
    console.error(err); 
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // In real code this could be database query, file read, network request etc.
  const success = Math.random() < 0.5; // 50% chance of failure
  if (!success) {
    throw new Error('Something went wrong');
  }
}