var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.render('../src/app/about/about.component.html');
});
module.exports = router;