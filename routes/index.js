var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.render('../src/app/nav/nav.component.html');
});
module.exports = router;