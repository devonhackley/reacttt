// var Water = React.createClass({
//     getInitialState: function() {
//         return {
//             currentTemp: 10
//         };
//     },
//
//     setTemperature: function(e) {
//         this.setState({ currentTemp: e.target.value });
//     },
//
//     render: function() {
//     	// empty variable that will hold either "Liquid", "Solid", or "Gas"
//         var stateOfMatter;
//
//         // If temp is on/below freezing, it's a solid
//         if (this.state.currentTemp <= 32) {
//             stateOfMatter = 'Solid';
//
//         // if temp is on/above boiling, it's a gas
//         } else if (this.state.currentTemp >= 212) {
//             stateOfMatter = 'Gas';
//
//         // otherwise it's just a liquid
//         } else {
//             stateOfMatter = 'Liquid';
//         }
//
//
//         return (
//         	<div>
//             	<input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp } />
//             	<p>At { this.state.currentTemp }°F, water is considered to be a "{ stateOfMatter }" state of matter.</p>
//         	</div>
//         );
//
//     }
// });
//
// ReactDOM.render(<Water />, document.getElementById('container'));




//Reusable components

var Liquid = React.createClass({
  getInitialState: function(){
    return { currentTemp: 10 };
  },

  setTemperature: function(e){
    this.setState({
      currentTemp: e.target.value
    });
  },

  render: function(props){
    var stateOfMatter;

    if (this.state.currentTemp <= this.props.config.freezing) {
        stateOfMatter = 'Solid';

    // if temp is on/above boiling, it's a gas
  } else if (this.state.currentTemp >= this.props.config.boiling) {
        stateOfMatter = 'Gas';

    // otherwise it's just a liquid
    } else {
        stateOfMatter = 'Liquid';
    }
    return (
      <div>
          <input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp } />
          <p>At { this.state.currentTemp }°F, { this.props.config.name} is considered to be a "{ stateOfMatter }" state of matter.</p>
      </div>
    );
  }
})

var ethanol = {
  name: 'Ethanol',
  freezing: -173.2,
  boiling: 173.1
};

var ethanolEle = document.createElement('div');
document.getElementById('container').appendChild(ethanolEle);
ReactDOM.render(<Liquid config= { ethanol } />, ethanolEle);


var water = {
  name: 'Water',
  freezing: 32,
  boiling: 212
};

var waterEle = document.createElement('div');
document.getElementById('container').appendChild(waterEle);

ReactDOM.render(<Liquid config={ water } />, waterEle);
