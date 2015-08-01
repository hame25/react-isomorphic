import React from 'react';
import Search from '../search/'

let GlobalHeader = React.createClass({

  render () {
    return (
      <div id="global-header">
        <Search />
      </div>
    );
  }
});

export default GlobalHeader;