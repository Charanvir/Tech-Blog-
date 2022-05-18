const Comment = require("../models/Comment");

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: 'Excited to see how the season goes. Lets go Farlo'
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: 'Kdot does it again. What an album'
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: 'Simrin is a great salesperson'
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: 'Ive recommended you guys to so many people'
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: 'Its getting ridiculous. They have to start planning better'
    },
    {
        user_id: 2,
        post_id: 6,
        comment_text: 'Finally a good decision from Chrysler'
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;