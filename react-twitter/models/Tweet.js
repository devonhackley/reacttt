'use strict';

const mongoose = require('mongoose');


//Tweet data
const schema =  mongoose.Schema({
    twid       : {type: String  }
  , active     : {type: Boolean }
  , author     : {type: String  }
  , avatar     : {type: String  }
  , body       : {type: String  }
  , date       : {type: Date    }
  , screenname : {type: String  }
});

schema.statics.getTweets = function(page, skip, callback){
  var tweets = [],
      start = (page * 10) + (skip * 1); //ensures pages are relative to original count and no duplicate tweets

  //Query db using skip and limit to grab chunks of tweets
  Tweet.find({}, 'twid active author avatar body date screenname', {skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){

    if(!err){
      tweets = docs //the tweets
      tweets.forEach(tweet => {
        tweet.active = true; //sets tweets to active
      });
    }

    callback(tweets);
  });
};

module.exports = Tweet = mongoose.model('Tweet', schema);
