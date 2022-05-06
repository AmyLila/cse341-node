const routes = require('express').Router();
const connection = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;

 
// code to get all contacs
routes.get ('/', (req, res) => {
    const resultAll = connection.getCollection().find();
    resultAll.toArray().then((lists) => {
      res.status(200).json(lists);
    });
  }); //end get all contacts


//Get contact by ID
routes.get('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const resultsAll = connection.getCollection().find({_id: contactId});

    //This should be in a controller all that should be in the route is routes.get('/', connection.getCollection());
    resultsAll.toArray().then((documents) => {
        res.status(200).json(documents[0]);
        console.log(`One Contact: ${req.params.id}! From the contacts file.`)


    });
    

}); //End get contacts by ID



//POST route to create a new contact
routes.post('/', (req, res) => {
    
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
  };

    const response = connection.getCollection().insertOne(newContact);
        if (response.acknowledged) {
            res.status(201).json(response);
            console.log(`Contact ${req.params.id} has been added to the database`);
            
        }
        else {
            res.status(500).json(response.error || 'error uploading a new contact from the contacts file');
          }

}); //End create new contact

module.exports = routes  