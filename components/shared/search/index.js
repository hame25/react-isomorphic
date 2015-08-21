import React from 'react';
import shouldComponentUpdate from '../../mixins/shouldComponentUpdate';

let Search = React.createClass({

  displayName: 'Search',
  mixins: [shouldComponentUpdate],

  onSubmit: function (e) {
  	e.preventDefault();

  	let query = this.props.cursor.get('query');

  	if(query === '') {
  		alert('Empty search!!!!')
  	}
  },

  onChange: function (e) {
  	let value = e.target.value;

  	this.props.cursor.update('query', function () {
      return value;
    });
  },

  render () {

    return (
      <div id="global-search">
      	<form>
      		<label>Search</label>
      		<input type="input" placeholder="I'm looking for" onChange={this.onChange} defaultValue={this.props.cursor.get('query')} ref="searchBox"/>
      		<button type="submit" name="submit-search" onClick={this.onSubmit}>Search</button>
      	</form>
      </div>	
    );
  },

});

export default Search;