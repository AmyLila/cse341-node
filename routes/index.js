const routes = require('express').Router

routes.get('/', (req, res) => {
  res.send('Brady Baker!')
});

module.exports = routes  