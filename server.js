const express = require('express');
const mongoConnection = require('./database/connection');
const app = express();
const port = process.env.PORT || 3000;


app.use('/', require('./routes'))



mongoConnection (() => {
  
  app.listen(port);
  console.log(`Running on port ${port} from the server file`)

})