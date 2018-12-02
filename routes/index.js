var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.render('../src/app/about/app.component.html');
});
module.exports = router;