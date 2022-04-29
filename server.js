const express = require('express');
const mongoConnection = require('./utilities/database');
const app = express();
const port = process.env.PORT || 3000;


app.use('/', require('./routes'))


app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

mongoConnection ((user) => {
  console.log(user);
  app.listen(port);

})