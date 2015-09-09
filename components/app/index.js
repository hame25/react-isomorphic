import React from 'react';
import {RouteHandler as RouteHandler} from 'react-router';
import GlobalHeader from '../shared/header';
import Base from '../base';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
//import config from 'config';
import config from '../../config';
import url from 'url';

class App extends Base {

  constructor () {
    super();
    this.displayName = 'App';
  }

  render () {

    return (
      <div>
        <header>
          <GlobalHeader cursor={this.props.cursor.cursor('search')}/>
        </header>
        <section>
          {/* Render Main Content */}
          <RouteHandler {...this.props}/>
        </section>
      </div>
    );
  }
}

/*App.fetchData = function () {
  return fetch(url.format(config.services.taxonomy))
    .then(function(response) {
      return response.json();
    }).then(function(taxonomy) {
      return(taxonomy);
    });
}*/

export default App;