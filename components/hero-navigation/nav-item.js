import React from 'react';

let NavItem = React.createClass({

  render () {
    let item = this.props.item;
    return (
      <li key={this.props.key}>
        <a href={item.get('url')}>
          {item.get('name')}
        </a>
      </li>
    );
  }
});

export default NavItem;