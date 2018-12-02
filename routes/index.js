var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
   res.render('../src/app/app.component');
});
module.exports = router;