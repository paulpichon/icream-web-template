//express
const express = require('express');
const app = express();
//puerto
const port = 8080;

//static files
app.use(express.static('public'));

//about
app.get('/about', (req, res) => {
  res.sendFile( __dirname + '/public/about.html' );
});
//contact
app.get('/contact', (req, res) => {
  res.sendFile( __dirname + '/public/contact.html' );
});
//gallery
app.get('/gallery', (req, res) => {
  res.sendFile( __dirname + '/public/gallery.html' );
});
//product
app.get('/product', (req, res) => {
  res.sendFile( __dirname + '/public/product.html' );
});
//service
app.get('/service', (req, res) => {
  res.sendFile( __dirname + '/public/service.html' );
});
//error 404
app.get('/*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html' );
});

//puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});