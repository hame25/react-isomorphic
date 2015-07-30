import React from 'react';

let Home = React.createClass({

	handleClick : function () {
		alert('Clientside clicked');
	},

  render () {
    return (
      <div>
        <h2 onClick={this.handleClick}>My Homepage</h2>
      </div>
    );
  }
});

export default Home;