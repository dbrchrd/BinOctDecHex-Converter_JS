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
  console.log(req.route.path);
  let converted = convert(req, req.query.value, req.query.from, req.query.to)
  console.log(converted);
  if (!converted.error) {
    res.send(`Value: ${converted.v} From: ${converted.from} => To: ${converted.to} = ${converted.res}`);
  } else {
    res.send(`Error: ${converted.error}`);
  }
});

app.listen(6060);
