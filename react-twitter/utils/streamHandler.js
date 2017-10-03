'use strict';

const Tweet = require('../models/Tweet');

module.exports = function(stream, io){

  //When stream emits an event i.e new tweet, the tweet data is created and saved and emitted back to the client
  stream.on('data', function(data){

    //new tweet object
    var tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name']
    };

    var newTweet = new Tweet(tweet);

    newTweet.save(function(err){
      if(!err){
        //If no error, socket.io emits tweet to stream
        io.emit('tweet', tweet);
      }
    });
  });
};
