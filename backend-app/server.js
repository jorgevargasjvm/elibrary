const config = require('./config');
// const admin = require('./firebase/fireconfig');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// var db = admin.database();
var routes = require('./routes');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/api', routes);

app.get('/', function (req, res) {
  res.send('API');
});
// Puerto donde corre la aplicacion localmente.
app.listen(3000, function () {
  console.log('Example app listening on port 3000');
}); 