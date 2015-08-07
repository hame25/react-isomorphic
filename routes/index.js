import React from 'react';
import Router from 'react-router';
import App from '../components/app/';
import Home from '../components/home';
import PageTwo from '../components/page-2';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
	<Route path="/" name="app" handler={App}>
    	<DefaultRoute name="home" handler={Home}/>
    	<Route name="page-2" handler={PageTwo}/>
    	<Route name="page-3" handler={PageTwo}/>
    	<Route name="page-4" handler={PageTwo}/>
  	</Route>
)

export default routes;