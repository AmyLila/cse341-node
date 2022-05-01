const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

let _client;
let _collection;


//Connection Method. I tried so hard to figure this out with a callback function and got stuck so I'm using Brother Lyons code. 
const mongoConnection = () => {

    MongoClient.connect(process.env.DB_URI, (err, client) => {
        if (err) throw err;
        _client = client
        _collection = client.db('contacts').collection('contacts');
        console.log('Connected! from the connection file');

    });
       
};

const getCollection = () => {
    if  (_collection) {
        return _collection;
    }
    throw 'No database found.'

};

module.exports = {mongoConnection, getCollection};







