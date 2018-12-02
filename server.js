// server.js
const express = require('express');
const app = express();
const path = require('path');

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

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/contribution', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/contribution/contribution.component.html'));
});
app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/about/about.component.html'));
});
app.get('/example', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/example/example.component.html'));
});
app.get('/experience', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/experience/experience.component.html'));
});
app.get('/install', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/install/install.component.html'));
});
app.get('/tutorial', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/frontend/tutorial/tutorial.component.html'));
});