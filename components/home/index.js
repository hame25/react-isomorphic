import React from 'react';
import GlobalHeader from '../shared/header/';
import HeroNav from '../hero-navigation/';
import Router from 'react-router';
import fetch from 'isomorphic-fetch';
import config from 'config';
import url from 'url';

let Link = Router.Link;

let Home = React.createClass({

  statics: {
    fetchData: function() {
      return fetch(url.format(config.get('services.taxonomy')))
      .then(function(response) {
          return response.json();
      }).then(function(taxonomy) {
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