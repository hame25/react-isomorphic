import React from 'react';
import GlobalHeader from '../shared/header/';
import HeroNav from '../hero-navigation/';

let Home = React.createClass({

	handleClick : function () {
		alert('Clientside clicked');
    //update
    this.props.cursor.cursor('header').update('title', function () {
      return 'new title updated!!!';
    });
	},

  render () {
    return (
      <div>
        <GlobalHeader/>
        <HeroNav/>
        <h2 onClick={this.handleClick}>{this.props.cursor.cursor('header').get('title')}</h2>
      </div>
    );
  }
});

export default Home;