const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello from ${process.env.INSTANCE_NAME || 'unknown'} instance`);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});