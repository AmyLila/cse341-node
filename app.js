const express = require('express');
const connection = require('./data/connection');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

connection.mongoConnection();

app
.use(express.json())
.use(cors())
.use('/', require('./routes'));



// Add support for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});

