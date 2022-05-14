const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'contacts API',
  },
  // host: 'localhost:3000',
  // schemes: ['http'],

  host: 'https://amy-baker-cse-341.herokuapp.com',
  schemes: ['https'],

  //for heroku use schemes: ['https']  https://amy-baker-cse-341.herokuapp.com
};

const outputFile = '.swagger-output.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);