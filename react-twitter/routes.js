'use strict';

const JSX = require('node-jsx').install(),
React = require('react'),
TweetsApp = React.createFactory(require('./components/TweetsApp.react')),
Tweet = require('./models/Tweet');


module.exports = {

  index: function(req,res){
    //Call to get tweets in the db
    Tweet.getTweets(0,0, function(tweets,pages) {

      //Render React to a string, and passing in our fetched tweets
      var markup = React.renderToString(
        TweetsApp({
          tweets: tweets
        })
      );

      //Render home template

      res.render('home', {
        markup: markup, //Pass newly rendered React markup
        state: JSON.stringify(tweets) //Pass current state to client
      });
    });
  },

  page: function(req, res){
    //Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, (tweets) => {
      res.send(tweets);
    })
  }
}
