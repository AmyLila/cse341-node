const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connection = require('./data/connection');


const port = process.env.PORT || 3000;
const app = express();

connection.mongoConnection();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-origin', '*');
  next();
});
app.use('/', require('./routes'));



app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});

