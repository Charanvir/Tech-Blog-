const Post = require("../models/Post");

const postData = [
    {
        title: 'HTML',
        post_text: 'HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet.',
        user_id: 1
    },
    {
        title: 'CSS',
        post_text: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).',
        user_id: 1
    },
    {
        title: 'JavaScript',
        post_text: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
        user_id: 2
    },
    {
        title: 'Node.js',
        post_text: 'Node. js (Node) is an open source development platform for executing JavaScript code server-side.',
        user_id: 2
    },
    {
        title: 'Express',
        post_text: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.',
        user_id: 3
    },
    {
        title: 'MySQL',
        post_text: 'MySQL is an open-source relational database management system. As with other relational databases, MySQL stores data in tables made up of rows and columns.',
        user_id: 3
    },
];

// creates all the posts at once 
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;