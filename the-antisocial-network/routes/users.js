var express = require('express');
var router = express.Router();
const passport = require('passport')
const usersCtrl = require('../controllers/users')
/* GET users listing. */
router.get('/', usersCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
))

// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect: '/posts',
//     failureRedirect: '/posts'
//   }
// ))

router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err)console.log(err)
    res.redirect('/posts')
  })
})

module.exports = router;
