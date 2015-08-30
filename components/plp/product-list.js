import React from 'react';
import ProductTile from './product-tile.js';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate';

let ProductList = React.createClass({

  displayName: 'ProductList',
  mixins: [shouldComponentUpdate],

  render () {
    
    let products = this.props.cursor.get('products').deref();

    return (
      	<ul>
        {products.map((item, i) => 
          <ProductTile key={i} item={item}/>
        )}
        </ul>
    );
  }
});

export default ProductList;