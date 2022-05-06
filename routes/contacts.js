const routes = require('express').Router();
const connection = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;



// code to get all contacs
routes.get('/', (req, res) => {

    const resultsAll = connection.getCollection().find();
    resultsAll.toArray().then((documents) => {
        res.status(200).json(documents);
        console.log('All Contacts! From the contacts file.')


    });
    

}); //end get all contacts


//Get contact by ID
routes.get('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const resultsAll = connection.getCollection().find({_id: contactId});
    resultsAll.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`One Contact: ${req.params.id}! From the contacts file.`)


    });
    

}); //End get contacts by ID

module.exports = routes  