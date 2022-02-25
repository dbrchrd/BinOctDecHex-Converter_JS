// Modules
const express = require('express');
const bodyParser = require('body-parser');
// Functions
const { convert } = require('./conversion');
// Configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
  console.log(req.query);
});

app.listen(6060);
