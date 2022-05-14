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

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);