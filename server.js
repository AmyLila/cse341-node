const express = require('express');
const connection = require('./database/connection');
const app = express();
const port = process.env.PORT || 3000;

connection.mongoConnection();

app.use('/', require('./routes'))

app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});

