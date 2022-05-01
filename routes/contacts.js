const routes = require('express').Router();
const getdb = require('../database/connection').getdb;

routes.get('/', (req, res) => {
  res.send('Contacts Page')




});

module.exports = routes  