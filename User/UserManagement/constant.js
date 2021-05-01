const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

const accessTokenSecret = 'youraccesstokensecret';

exports.users = users;
exports.accessTokenSecret = accessTokenSecret;