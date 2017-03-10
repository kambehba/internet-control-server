var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config');
var apiController = require('./controllers/outputController')
//var port = process.env.PORT || 3000;
var port = process.env.MONGOLAB_URI || 3000;
//var setupController = require('./controllers/setupController');
app.use('/assets',express.static(__dirname+'/public'));

//this is added to resolve cross origin problem
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 res.send("WELCOME");
  next();
});


app.set('view engine','ejs');

console.log('1111111111111111');

//mongoose.connect(config.getDbConnectionString());
console.log(config.getDbConnectionString());
/*mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error',(error) =>{consol.warn('Warning',error);
});*/

//setupController(app);
//apiController(app);
app.listen(port);