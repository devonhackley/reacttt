'use strict';

const React = require('react');
const Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({


  //Render Tweets
  render: function(){


    //build Tweet
    var content = this.props.tweets.map(function(tweet){
      return(
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    //Return ul filled with Tweets
    return(
      <ul className="tweets">{content}</ul
    )
  }
});
