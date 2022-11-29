const Post = require('../models/post')


module.exports = {
    index,
    new: newPost,
    create
}

function index(req, res){
    console.log(req.user)
    Post.find({}, function(err, posts){
        if(err){
            console.log(err)
        }
        res.render('posts/index', {title:'Posts', posts, user: req.user})
    })
}

function newPost(req,res){
    res.render('posts/new', {title: 'New Post'})
}

function create(req,res){
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key]
    }
    const post = new Post(req.body)
    post.save(function(err){
        if (err) return res.redirect('/post/new')
        res.redirect(`/post/${post._id}`)
    })
}