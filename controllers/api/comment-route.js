const router = require("express").Router();
const { User, Post, Comment } = require("../../models")

router.get("/", (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'comment_text'
        ],
        include: [
            {
                model: User,
                attributes: ['user']
            },
            {
                model: Post,
                attributes: ['title', 'post_text']
            }
        ]
    })
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

module.exports = router;