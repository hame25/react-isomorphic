import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor'
import routes from '../routes';

let content = document.getElementById('content');
let data = JSON.parse(document.getElementById('initial-data').innerHTML);
data = Immutable.fromJS(data);



// Start the client-side router using only `pushState`
// with the supplied routes
Router.run(routes, Router.HistoryLocation, function (Handler, req) {
	let cursor = Cursor.from(data, onCursorChange);

	function onCursorChange (newData) {
		cursor = Cursor.from(newData, onCursorChange);
		render();
	}

	function render () {
		React.render(<Handler cursor = {cursor}/>, self.content);
	}

	render();
});