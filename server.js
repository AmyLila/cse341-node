const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

// app.get('/', (req, res) => {
//   res.send('Brady Baker!')
// });

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})