var express = require('express');
var router = express.Router();
// const passport = require('passport')
// const dburl = process.env.DATABASE_URL


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/posts');
});

// router.get('/auth/google', passport.authenticate(
//   'google',
//   {scope: ['profile', 'email']}
// ))

// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect: '/posts',
//     failureRedirect: '/posts'
//   }
// ))

// router.get('/logout', function(req, res){
//   req.logout()
//   res.redirect('/posts')
// })

module.exports = router;
