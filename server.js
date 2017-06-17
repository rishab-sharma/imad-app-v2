var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/draw',function(req,res){res.sendFile(path.join(__dirname,'ui','draw.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});
app.get('/ui/collg-logo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'collg-logo.png'));
});
app.get('/ui/rs.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'rs.jpg'));
});
app.get('/ui/school-logo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'school-logo.jpg'));
});  
app.get('/ui/school-logo2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'school-logo2.jpg'));
});  
app.get('/ui/slider.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slider.jpg'));
});
var names=[];
app.get('/submit-name/:name', function (req, res) {
  var name=req.params.name;
  names.push(name);
  //JSON javascript object notation
  res.send(JSON.stringify(names));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
