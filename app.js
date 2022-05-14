const express = require('express');
// const bodyParser = require('body-parser');
const connection = require('./data/connection');
const cors = require('cors');


const port = process.env.PORT || 3000;
const app = express();

connection.mongoConnection();

app
// .use(bodyParser.json())
.use(cors())
.use(express.json())
// .use(express.urlencoded({ extended: true }))
.use('/', require('./routes'));;



app.listen(port, () => {
  console.log(`Running on port ${port} from the server file`)

});

