import React from 'react';

let Search = React.createClass({

  render () {
    return (
      <div id="global-search">
      	<form>
      		<label>Search</label>
      		<input type="input" placeholder="I'm looking for"/>
      		<button type="submit" name="submit-search">Search</button>
      	</form>
      </div>	
    );
  }
});

export default Search;