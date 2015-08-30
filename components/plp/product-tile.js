import React from 'react';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate';

let ProductTile = React.createClass({

  displayName: 'ProductTile',
  mixins: [shouldComponentUpdate],

  render () {

    return (
      	<li>{this.props.item.get('name')}</li>
    );
  }
});

export default ProductTile;