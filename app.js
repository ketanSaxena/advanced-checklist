import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import http from 'http';
import config from './app/config';

// Configure app
let app = express();
app.set('port', process.env.PORT || config.defaultPort);
app.use(bodyParser.json());
app.use(methodOverride());

//mapping result for index route
app.get('/', (req, res) => {
  res.json({result: 'Application running successfully on port 3000.', status: 'OK'});
});

app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});
