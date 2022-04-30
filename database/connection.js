const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
require('dotenv').config();


//Connection Method. I learned this from a udemy course. It uses the mongodb url to connect and then logs a success or error in the console. 
//https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11942758#overview
const mongoConnection = (callback) => {
    MongoClient.connect(process.env.DB_URI
    )
        .then(user => {
            console.log('Connected!');
            callback(user);
        })
        .catch(err =>{
            console.log(err)});
};

module.exports = mongoConnection;






