// server.js
const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:givemeaccess01@ds229701.mlab.com:29701/comments");
var nameSchema = new mongoose.Schema({
  firstName: { 
	type: String,
	required: true
  }
  lastName: {
	type: String,
	required: true
  }
  email: { 
	type: String,
	required: true
  }
  comment: {
	type: String,
	required: true
  }
  status: {
	type: String, 
	required: true,
	default: "Open"
  }
});
var Comment = mongoose.model("Comment", nameSchema);
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/frontend'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
app.post("/createComment", (req, res) => {
  var myData = new Comment(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/'));
});