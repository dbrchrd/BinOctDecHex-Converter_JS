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
    res.send(`${converted.v}(${converted.from}) = ${converted.res}(${converted.to})`);
  } else {
    res.send(`Error: ${converted.error}`);
  }
});

app.listen(6060);
