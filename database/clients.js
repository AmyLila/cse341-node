const mongodb = require('mongodb');
const MongoUser = mongodb.MongoUser;


//Connection Method. I learned this from a udemy course. It uses the mongodb url to connect and then logs a success or error in the console. 
//https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11942758#overview
const mongoConnection = (callback) => {
    MongoUser.connect('mongodb+srv://AmyLilaBaker:qblEihLJDcifnt0r@cse341.e1a0s.mongodb.net/clients?retryWrites=true&w=majority')
        .then(result => {
            console.log('Connected!');
            callback(result);
        })
        .catch(err =>{
            console.log(err)});
};

module.exports = mongoConnection;



// This is where I'm trying to call my password from a the hidden_stuff file. 
MongoUser.connect('mongodb+srv://AmyLilaBaker:qblEihLJDcifnt0r@cse341.e1a0s.mongodb.net/clients?retryWrites=true&w=majority');



