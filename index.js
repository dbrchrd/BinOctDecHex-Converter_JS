// Modules
const express = require('express');
const bodyParser = require('body-parser');
// Functions
const { convert } = require('./conversion');
// Configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
