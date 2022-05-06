const routes = require('express').Router();

routes.use('/', require('./home'));
routes.use('/contacts', require('./contacts'));
routes.use('/learnCRUD', require('./learnCRUD'));

module.exports = routes  