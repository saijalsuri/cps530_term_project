var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var distDir = __dirname + "/dist/index.html";
app.use(express.static(distDir));
app.listen(process.env.PORT || 3000);
