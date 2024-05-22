// Create web server
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a static file server.  Files in the public folder can just be referenced by their name
app.use(express.static(path.join(__dirname, 'public')));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up the data file
var dataFile = path.join(__dirname, 'data', 'comments.json');

// Display the comments page
app.get('/', function(req, res) {
  // Read the data file and pass the comments array to the view
  fs.readFile(dataFile, function(err, data) {
    var comments = JSON.parse(data);
    res.render('comments', { comments: comments });
  });
});

// Add a comment
app.post('/', function(req, res) {
  // Read the data file and push the new comment to the comments array
  fs.readFile(dataFile, function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    // Write the comments array back to the data file
    fs.writeFile(dataFile, JSON.stringify(comments), function(err) {
      res.redirect('/');
    });
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});