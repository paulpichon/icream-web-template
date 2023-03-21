//express
const express = require('express');
const app = express();
//puerto
const port = 8080;

//static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});