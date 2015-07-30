import React from 'react';
import {RouteHandler as RouteHandler} from 'react-router';

let App = React.createClass({
  render () {
    return (
      <div>
        <header>
        </header>
        <section>
          {/* Render Main Content */}
          <RouteHandler {...this.props}/>
        </section>
      </div>
    );
  }
});

export default App;