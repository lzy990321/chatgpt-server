const express = require('express');
const app = express();
const router = require('./router');
const port = 3002;

app.get('/', (req, res) => {
  res.send('hello');
});

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
