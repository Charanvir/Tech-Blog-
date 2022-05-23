const User = require("../models/User")

const userData = [
    {
        user: 'charanvir',
        email: 'charanvir123@gmail.com',
        password: 'charanvir'
    },
    {
        user: 'simrin',
        email: 'simrin@gmail.com',
        password: 'simrin'
    },
    {
        user: 'kashmira',
        email: 'kashmira@gmail.com',
        password: 'kashmira'
    }
];

// creates the above users all at once
const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;