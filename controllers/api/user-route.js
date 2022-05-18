const router = require("express").Router();
const { User, Post, Comment } = require("../../models")

router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: ['user', 'email', 'password'],
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'post_text']
            }
        ],
        where: {
            id: req.params.id
        },
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
});

router.post('/', (req, res) => {
    User.create({
        user: req.body.user,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;