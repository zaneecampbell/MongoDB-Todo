const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5c6f1442d7d4b7d006aca06511';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     };
//     console.log('Todo By ID', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

User.findById('5c692ad9d4d3aa1c26f5bc7c').then((user) => {
    if (!user) {
        return console.log('User not found');
    };

    console.log('User by ID', JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})