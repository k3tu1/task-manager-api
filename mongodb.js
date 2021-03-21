// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);
    console.log('connected correctly!');
    /**
     * creating table/collection with the name of 'users' and inserting one raw/document.
     * to confirm document is added to collection we can use insertOne method callback to confirm
     * can't pass direct object ID we have create object function first
     * FIND function will return cursor which point to database and it don't have any callback function.
     */
    
})