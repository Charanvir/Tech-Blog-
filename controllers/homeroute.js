const router = require("express").Router();
const sequelize = require("../config/connection")
const { User, Post, Comment } = require('../models')

router.get("/", (req, res) => {
    Post.findAll({
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
            }
        ]
    })
        .then(postData => {
            const posts = postData.map(post => post.get({ plain: true }));
            res.render('homepage', { posts, loggedIn: req.session.loggedIn })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        attributes: [
            'id',
            'title',
            'post_text',
            'user_id',
            'created_at'
        ],
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['user']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['user']
                }
            }
        ]
    })
        .then(postData => {
            const posts = postData.get({ plain: true });
            res.render('singlePost', { posts, loggedIn: req.session.loggedIn })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login')
});

module.exports = router;