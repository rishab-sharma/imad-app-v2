var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/draw.html',function(req,res){res.sendFile(path.join(__dirname,'ui','draw.html'));
});
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});
app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/package-json.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'package-json.js'));
});
app.get('/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});  
app.get('/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});  
app.get('/responsive.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'responsive.css'));
});
app.get('/vegas.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vegas.min.js'));
});
app.get('/particles.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'particles.min.js'));
});
app.get('/vegas.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'vegas.min.css'));
});
app.get('/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});
app.get('/01.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '01.jpg'));
});
app.get('/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});
app.get('/modernizr-2.8.3.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modernizr-2.8.3.min.js'));
});
app.get('/jquery-2.2.4.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-2.2.4.min.js'));
});

app.get('/normalize.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'normalize.css'));
});
app.get('/poly_lines.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'poly_lines.html'));
});
var names=[];
app.get('/submit-name/:name', function (req, res) {
  var name=req.params.name;
  names.push(name);
  //JSON javascript object notation
  res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
