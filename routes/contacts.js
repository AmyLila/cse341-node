const routes = require('express').Router();
const connection = require('../database/connection');

routes.get('/', (req, res) => {
    connection.getCollection().find().toArray((err, result) => {
        if (err) throw err;
        res.json(result);
        console.log('Successful Query! From the contacts file.')
        
    });
  





});

module.exports = routes  