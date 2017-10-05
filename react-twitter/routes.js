'use strict';

const  JSX = require('node-jsx').install();
const React = require('react');
const TweetsApp = require('./components/TweetsApp.react');
const Tweet = require('./models/Tweet.js');


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
