const routes = require('express').Router();

routes.use('/', require('./home'));
routes.use('/contacts', require('./contacts'));
routes.use('/learnCRUD', require('./learnCRUD'));
routes.use('/swagger', require('./swagger'));


routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
      };
      res.send(docData);
    })
  );



module.exports = routes  