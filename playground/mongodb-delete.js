// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // challenge delete many
    // db.collection('Users').deleteMany({name: 'Zane'}).then((result) => {
    //     console.log(result);
    // });

    // challenge findoneanddelete
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5c65194e5aab570760e36346")
    // }).then((result) => {
    //     console.log(result);
    // });

    // client.close();
});