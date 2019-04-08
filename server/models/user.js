// This is an old unfinished project using older practices, I've since moved on to more standardized and relativent methods and technologies

const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { User };