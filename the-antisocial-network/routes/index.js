var express = require('express');
var router = express.Router();
const dburl = process.env.DATABASE_URL


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/posts');
});

module.exports = router;
