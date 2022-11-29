const Post = require('../models/post')


module.exports = {
    index,
}

function index(req, res){
    Post.find({}, function(err, posts){
        if(err){
            console.log(err)
        }
        res.render('posts/index', {title:'Posts', posts})
    })
}