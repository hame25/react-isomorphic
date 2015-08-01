import React from 'react';

let HeroNav = React.createClass({

  render () {
    return (
      <div id="hero-nav">
        <h2>Shop by department</h2>
      	<ul>
          <li>Technology and gamining</li>
          <li>Home Electrical</li>
          <li>Home</li>
          <li>Garden</li>
          <li>DIY & car</li>
        </ul>
      </div>	
    );
  }
});

export default HeroNav;