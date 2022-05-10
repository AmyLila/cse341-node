const routes = require('express').Router();
const connection = require('../data/connection');
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
    const resultsOne = connection.getCollection().find({_id: contactId});

    //This should be in a controller all that should be in the route is routes.get('/', connection.getCollection());
    resultsOne.toArray().then((documents) => {
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

    const result = connection.getCollection().insertOne(newContact);
    result.then((documents) => {
      res.status(201).json(documents);

    });
    console.log(result);



}); //End create new contact


//Code to modify an existing contact by id
routes.put('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const result = connection.getCollection().replaceOne({_id: contactId}, contact);
  result.then((documents) => {
    res.status(202).json(documents);

  });
  
  console.log(contact);
 
});//end modify contact


//Delete contact by id
routes.delete('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = connection.getCollection().deleteOne({_id:contactId});
  result.then((documents) => {
    res.status(202).json(documents);

  });
  console.log(result);
  


});

module.exports = routes  