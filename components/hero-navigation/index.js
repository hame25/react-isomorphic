import React from 'react';
import NavItem from './nav-item.js';

let HeroNav = React.createClass({

  render () {
    let taxonomy = this.props.cursor.get('taxonomy').deref();

    return (
      <div id="hero-nav">
        <h2>Shop by department</h2>
      	<ul>
        {taxonomy.map((item, i) => 
          <NavItem key={i} item={item}/>
        )}
        </ul>
      </div>	
    );
  }
});

export default HeroNav;