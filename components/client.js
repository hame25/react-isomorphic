import 'whatwg-fetch';
import React from 'react';
import Router from 'react-router';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor'
import routes from '../routes';

let content = document.getElementById('content');

// Create application centralised data
//import parseSafe from '../utils/parse-safe';
//let data = parseSafe(document.getElementById('initial-data').innerHTML, {});
let cursor = {};

Router.run(routes, Router.HistoryLocation, (Handler, req) => {
  // render the application from the root application component handler
    React.render(<Handler cursor={cursor}/>, content);
});
