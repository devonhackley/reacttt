
'use strict';

const express = require('express'),
      exphbs = require('express-handlebars'),
      mongoose = require('mongoose'),
      twitter = require('ntwitter'),
      routes = require('./routes'),
      config = require('./config'),
      streamHandler = require('./utils/streamHandler');


const app = express();
const PORT = process.env.PORT || 8080;

//Sets templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Disables etag headers from the response
app.disable('etag');

mongoose.connect('mongod://localhost/react-tweets');

const twit = new twitter(config.twitter);

//Routing
app.get('/', routes.index);
app.get('/page/:page/:skip', routes.page);

//set static content directory (/public)
app.use('/', express.static(__dirname + '/public/'));

const server = app.listen(PORT, () => {
  console.log('Server up and listening on port ' + PORT);
});

//Initialize socket.io
const io = require('socket.io').listen(server);

//stream listener for tweets matching tracked keywords
twit.stream('statuses/filter', { track: 'marvel, #marvel'}, (stream) => {
  streamHandler(stream, io);
});
