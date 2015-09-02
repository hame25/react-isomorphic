import React from 'react';
import shouldComponentUpdate from '../mixins/shouldComponentUpdate';
import Base from '../base';

class ProductTile extends Base {

  constructor () {
    super();
    this.displayName = 'ProductTile';
  }

  render () {
    let item = this.props.item;

    return (
        <li>
          <h3>{item.get('name')}</h3>
          <img src={item.get('image').get('url')} />
          <p className='price'>£{item.get('price')}</p>
        </li>
    );
  }
}

export default ProductTile;