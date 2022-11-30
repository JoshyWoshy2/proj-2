const Post = require('../models/post')


module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deleteOne,
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
    res.render('posts/new', {title: 'New Post', user: req.user})
}

function create(req,res){
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key]
    }
    const post = new Post({...req.body, name: req.user.name})
    post.save(function(err){
        console.log(post)
        if (err) return res.redirect('/posts/new')
        res.redirect(`/posts/${post._id}`)
    })
}

function show(req,res){
    Post.findById(req.params.id, function(err, post){
        console.log(err)
        console.log(post.name)
        res.render('posts/show',{
            title: post.title,
            id: post._id,
            post: post.content,
            name: post.name,
            user: req.user
        })
    })
}

function deleteOne(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Post.findById(req.params.id, function(err, post) {
      if (err)console.log(err)  
      post.remove();
      // Save the updated book
      post.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/posts`);
      });
    });
  }