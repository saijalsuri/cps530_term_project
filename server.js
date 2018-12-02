const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/frontend'));
app.get('/*', function(req,res) {

app.listen(process.env.PORT || 3000);