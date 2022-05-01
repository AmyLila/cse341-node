const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();
let db;


//Connection Method. I learned this from a udemy course. It uses the mongodb url to connect and then logs a success or error in the console. 
//https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11942758#overview
const mongoConnection = (callback) => {
    MongoClient.connect(process.env.DB_URI
    )
        .then(user => {
            console.log('Connected! from the connection file');
            db = user.db()
            callback();
        })
        .catch(err =>{
            console.log(err);
            throw err;
        });
};

const getdb = () => {
    if  (db) {
        return db;
    }
    throw 'No database found.'

};

module.exports = mongoConnection, getdb;







