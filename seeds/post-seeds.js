const Post = require("../models/Post");

const postData = [
    {
        title: 'New farlo season',
        post_text: 'Brampton league starts on Monday',
        user_id: 1
    },
    {
        title: 'Kendrick Lamar',
        post_text: 'Kendricks new album has the makings of a classic',
        user_id: 1
    },
    {
        title: 'Watches Watches Watches',
        post_text: 'Simrin was the top watch seller again',
        user_id: 2
    },
    {
        title: 'Almaari Decor',
        post_text: 'Rapidly growing decor company',
        user_id: 2
    },
    {
        title: 'Chrysler',
        post_text: 'Brampton plant running out of parts at a regular basis',
        user_id: 3
    },
    {
        title: 'Electric',
        post_text: 'Brampton plant planning on going fully electric',
        user_id: 3
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;