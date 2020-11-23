var express = require('express');
var router = express.Router();
var init_model = require('../models/init')
var posts_model = require('../models/posts')

// GET API Base
router.get('/', (req, res) => {
    res.send({
        msg: "You have reached the base of the api."
    })
});

// router.get('/init', async (req, res) => {
//     let result = await init_model.init_DB()
//
//     if(result) {
//         res.send({msg: "Database has been set up!"})
//     } else {
//         res.send({msg: "Database encountered an error!"})
//     }
// });

// POST new post
router.post('/post', async (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let added = await posts_model.add_post(title, body)

    if(added) {
        res.send({msg: "Post added to database"})
    } else {
        res.send({msg: "Something went wrong"})
    }
})

// GET post by id
router.get('/post/:id', async (req, res) => {
    let id = req.params.id
    let result = await posts_model.get_post_by_id(id)
    if(result) {
        res.send(result)
    } else {
        res.send({msg: "Something went wrong."})
    }
})

// Get all posts
router.get('/posts', async (req, res) => {
    let results = await posts_model.get_all_posts()
    if(results) {
        res.send(results)
    } else {
        res.send({msg: "Something went wrong."})
    }
})

module.exports = router;
