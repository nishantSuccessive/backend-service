const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    confirmPassword: {
        required: true,
        type: String,
    },
    date: {
        default: Date.now(),
        type: Date,
    },
    originalId: {
        required: false,
        type: String,
    }
});

const userModal = mongoose.model('User', userSchema, 'userManagement', true)

module.exports = userModal 
