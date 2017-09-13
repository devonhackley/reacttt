'use strict';

var Hello = React.createClass({
  render: function() {
    var names = ['Joey', 'Josh', 'Jimmy'];
    return (
      <ul>
        {names.map((name,index) => {
          return <li key={ index }>{name}</li>;
        })}
      </ul>
    )
  }
});

//Best practice

var Hello = React.createClass({
  render: function(){
    var names = ['Joey', 'Josh', 'Jimmy'];
    var namesList = names.map(function(name) {
      return <li>{name}</li>
    })

    return <ul>{ nameList }</ul>
  }
})
