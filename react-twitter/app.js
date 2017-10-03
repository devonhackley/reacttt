'use strict';

const React = require('react');
const TweetsApp = require('./components/TweetsApp.react');


var initialState = JSON.parse(document.getElementById('initial-state').innerHTML); //Grabs initial state that was passed from server side

React.render(
  <TweetsApp tweets={initialState}/>,
  document.getElementById('react-app')
);
