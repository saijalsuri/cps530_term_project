var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var COMMENTS_COLLECTION = "comments";

var app = express();
app.use(bodyParser.json());
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
