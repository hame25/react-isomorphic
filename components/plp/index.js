import React from 'react';
import GlobalHeader from '../shared/header/';
import Router from 'react-router';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
//import config from 'config';
import config from '../../config';
import url from 'url';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate';
import ProductList from './product-list';

let Link = Router.Link;

let plp = React.createClass({

  displayName: 'PLP',
  mixins: [shouldComponentUpdate],

  statics: {
    fetchData: function() {
      return fetch(url.format(config.services.plp))
      .then(function(response) {
          return response.json();
      }).then(function(productData) {
          return(productData);
      });
    }
  },

  render () {

    return (
      <div>
        <GlobalHeader cursor={this.props.cursor.cursor('search')}/>
        <div className='plp-page'>
          <ProductList products={this.props.cursor.cursor('plp').get('products')}/>
        </div>
      </div>
    );
  }
});

export default plp;