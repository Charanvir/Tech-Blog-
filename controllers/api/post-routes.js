const router = require("express").Router();
const { User, Post, Comment } = require("../../models")

router.get("/", (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['user']
            },
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text'
                ]
            }
        ]
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router;