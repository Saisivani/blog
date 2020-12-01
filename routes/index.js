var express = require('express');
var router = express.Router();
var posts_model = require('../models/posts')

// GET Homepage
router.get('/', async(req, res) => {
  let posts = await posts_model.get_all_posts()
  if(posts) {
    res.render('posts', {
      title: "Blog Posts",
      posts: posts
    })
  } else {
    res.render('404')
  }
});

// GET Posts
router.get('/posts', async (req, res) => {
  res.redirect('/')
})

// GET Single Post
router.get('/post/:id', async (req, res) => {
  let id = req.params.id
  let result = await posts_model.get_post_by_id(id)

  if(result) {
    res.render('post', result)
  } else {
    res.render('404')
  }
})

// GET Post Submission Form
router.get('/post', (req, res) => {
  res.render('new-post', {title: "Submit Post", msg: ""})
})

// POST New Post
router.post('/post', async (req, res) => {
  let title = req.body.title
  let body = req.body.body
  let added = await posts_model.add_post(title, body)

  if(!added) {
    res.redirect(`/post/${added.lastInsertRowid}`)
  } else {
    res.render('new-post', {title: "Submit Post", msg: "ERROR: Please refill form."})
  }
})


module.exports = router;
