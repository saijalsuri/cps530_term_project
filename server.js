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

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  comment: String,
  status: String, default: "Open"
});

var Comment = mongoose.model("Comment", nameSchema);

const mongo = require('mongodb').MongoClient;
 	var url = 'mongodb://admin:givemeaccess01@ds229701.mlab.com:29701/comments';
	mongo.connect(url, (err, db) => {
		if(err) { 
			console.log(err);
		} else {
			console.log("Successfully established MongoDB connection!");
			
			
		}
	});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/'));
});

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