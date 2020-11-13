var express = require('express');
var router = express.Router();

// GET Homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

// GET Posts
router.get('/posts', (req, res) => {

  res.render('posts', {
    title: "My posts",
    posts: [
      {id: 1, title: "One", body: "This is a post. It's actually the first post. Isn't it cool to be first?"},
      {id: 2, title: "Second", body: "For sooth say I, no longer shall yeh suffer under his boot."},
      {id: 3, title: "Third", body: "This is once again a few words for the sake of adding content."},
    ]})
})

// GET Single Post
router.get('/post/:id', (req, res) => {
  res.render('post', {
    id: req.params.id,
    title: "Test post",
    body: "This post should be an actual post, but we're having database issues. Check ID to confirm it's all good."
  })
})

// GET Post Submission Form
router.get('/post', (req, res) => {
  res.render('new-post', {title: "Submit Post"})
})

// POST New Post
router.post('/post', (req, res) => {
  console.log(req.body)
  res.send({content: "All good!"})
})


module.exports = router;
