const router = require('express').Router();
const { User, Post, Comment } = require("../models")
const authorization = require('../utils/authorization')

router.get("/", authorization, (req, res) => {
    console.log(req.session.user_id)
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'title',
            'created_at',
            'id',
            'post_text'
        ],
        include: [
            {
                model: User,
                attributes: [
                    'user'
                ]
            },
            {
                model: Comment,
                attributes: ['comment_text'],
                include: {
                    model: User,
                    attributes: ['user']
                }
            }
        ]
    })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true }));
            console.log(posts)
            res.render('dashboard', { posts, loggedIn: true })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router