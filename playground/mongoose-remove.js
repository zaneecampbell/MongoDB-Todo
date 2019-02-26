const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({ id: '5c75cb48ee63f931bc7e1289' }).then((todo) => {
    
});

Todo.findByIdAndRemove('5c75cb48ee63f931bc7e1289').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});