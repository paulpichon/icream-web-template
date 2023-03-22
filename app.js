//express
const express = require('express');
//handlebars
const hbs = require('hbs');

//express
const app = express();
//puerto
const port = process.env.PORT;

//partials
hbs.registerPartials(__dirname + '/views/partials');

//hbs
app.set('view engine', 'hbs');

//static files
app.use(express.static('public'));

//index
app.get('/', (req, res) => {
  res.render('index');
});
//about
app.get('/about', (req, res) => {
  res.render('about');
});
//contact
app.get('/contact', (req, res) => {
  res.render('contact');
});
//gallery
app.get('/gallery', (req, res) => {
  res.render('gallery');
});
//product
app.get('/product', (req, res) => {
  res.render('product');
});
//service
app.get('/service', (req, res) => {
  res.render('service');
});
//error 404
app.get('/*', (req, res) => {
  res.render('404');
});

//puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});