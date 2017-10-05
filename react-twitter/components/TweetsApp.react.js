'use strict';


const React = require('react');
const Tweets = require('./Tweets.react.js');
const Loader = require('./Loader.react.js');
const NotificationBar = require('./NotificationBar.react.js');

module.exports =  React.createClass({

  //Method that add a tweet to timeline

  addTweet: function(tweet){

    //current state of application
    var updated = this.state.tweets;

    //Increment count
    var count = this.state.count + 1;

    //Increment skip count
    var skip = this.state.skip + 1;

    //Add new tweet to beginning of tweets array
    updated.unshift(tweet);

    //Set the new state of the application
    this.setState({tweets: updated, count: count, skip: skip});
  },

  //Method to get JSON from server by page
  getPage: function(page){

    //ajax request
    var request = new XMLHttpRequest(), self = this;

    request.open('GET', 'page/' + page + "/" + this.state.skip, true);
    request.onload = function(){

      //If no error
      if(request.status >=200 && request.status < 400){

        //Load next page
        self.loadPagedTweets(JSON.parse(request.responseText));
      } else {

        //Set state to (not pagin, paging complete)
        self.setState({paging: false, done: true});
      }
    };

    request.send();
  },

  //Method to show unread tweets
  showNewTweets: function(){

    //Get current state
    var updated = this.state.tweets;

    //Mark tweets active
    updated.forEach(tweet => {
      tweet.active = true;
    });

    //Set application state (active tweets + reset unread count)
    this.setState({tweets: updated, count: 0});

  },

  //METHOD to load tweets from server
  loadPagedTweets: function(tweets){

    //hold context
    var self = this;

    //If there are more tweets
    if(tweets.length > 0){

      //Get current state
      var updated = this.state.tweets;

      //Push tweets onto end of current array of tweets
      tweets.forEach(tweet => {
        updated.push(tweet);
      });

      //Use timeout to show loading svg
      setTimeout(function(){

        //set application state (Not paging, add tweets)
        self.setState({tweets: updated, paging: false});
      }, 1000);

    } else{
      //Set application state(not paging, paging complete)
      this.setState({paging: false, done:true});
    }
  },

  //Method that loads more tweets by window scroll position
  checkWindowScroll: function(){

    //Grab scroll position and window data
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var scroll = (document.body.scrollTop || document.documentElement.scrollTop || 0);

    var isScrolled = (height + scroll) > document.body.offsetHeight;

    //If at the bottom of page, not currently paging or reached the last page
    if(scrolled && !this.state.paging && !this.state.done){

      //Set application state (paging, increment page)
      this.setState({paging: true, page: this.state.page + 1});

      //Get next page of tweets from server
      this.getPage(this.state.page);
    }
  },

  //Set initial component state
  getInitialState: function(props){

    props = props || this.props;

    //Set initial application state using props
    return {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  },

  componentWillReceiveProps: function(newPs, oldPs){
    this.setState(this.getInitialState(nenewPs));
  },

  // Called directly after component rendering, only on client
  componentDidMount: function(){

    var self = this;

    // Initialize socket.io
    var socket = io.connect();

    // On tweet event
    socket.on('tweet', (data) => {
      self.addTweet(data);
    });

    // Attach scroll event to window for infinity paging
    window.addEventListener('scroll', this.checkWindowScroll);
  },

  render: function(){
    return (
      <div className="tweets-app">
        <Tweets tweets={this.state.tweets} />
        <Loader paging={this.state.paging} />
        <NotificationBar count={this.state.count} onShowNewTweets={this.showNewTweets} />
      </div>
    )
  }

});
