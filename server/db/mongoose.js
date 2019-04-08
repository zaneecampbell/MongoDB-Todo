// This is an old unfinished project using older practices, I've since moved on to more standardized and relativent methods and technologies

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };