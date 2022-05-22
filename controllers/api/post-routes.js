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
                ],
                include: {
                    model: User,
                    attributes: ['user']
                }
            }
        ]
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.get("/:id", (req, res) => {
    Post.findOne({
        attributes: [
            'id',
            'title',
            'post_text',
            'user_id'
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
                    'comment_text'
                ],
                include: {
                    model: User,
                    attributes: ['user']
                }
            }
        ]
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'No post found with this ID' })
                return
            }
            res.json(postData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.session.user_id
    })
        .then(postData => res.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put("/:id", (req, res) => {
    Post.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(postData => {
            if (!postData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;