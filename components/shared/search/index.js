import React from 'react';

let Search = React.createClass({

  onSubmit: function (e) {
  	e.preventDefault();

  	alert('search clicked');
  },

  onChange: function (e) {
  	let value = e.target.value;

  	this.props.cursor.update('query', function () {
      return value;
    });
  },

  render () {
  	console.log('*** re-render  search ***')

    return (
      <div id="global-search">
      	<form>
      		<label>Search</label>
      		<input type="input" placeholder="I'm looking for" onChange={this.onChange} defaultValue={this.props.cursor.get('query')} key="search-box"/>
      		<button type="submit" name="submit-search" onClick={this.onSubmit}>Search</button>
      	</form>
      </div>	
    );
  }
});

export default Search;