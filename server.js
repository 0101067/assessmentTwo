//For node.js Server Startup
const express = require('express')
const app = express()
const nunjucks  = require('nunjucks')
const port = 3000

app.use(express.static('static')) 

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/signup', (req, res) => {
  res.render('signup.html');
});

app.get('/booking', (req, res) => {
  res.render('booking.html');
});

app.get('/ticket', (req, res) => {
  res.render('ticket.html');
});

app.listen(port, () => console.log(`Website running on port ${port}!`))