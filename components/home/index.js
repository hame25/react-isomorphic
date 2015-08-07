import React from 'react';
import GlobalHeader from '../shared/header/';
import HeroNav from '../hero-navigation/';
import Router from 'react-router';
import fetch from 'isomorphic-fetch';

let Link = Router.Link;

let Home = React.createClass({

  statics: {
    fetchData: function(params, query) {
      //move to config
      return fetch('http://localhost:1981/taxonomy')
      .then(function(response) {
          return response.json();
      }).then(function(taxonomy) {
          console.log(taxonomy)
          return(taxonomy);
      });
    }
  },

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
        <Link to="page-2">Page 2</Link>
      </div>
    );
  }
});

export default Home;