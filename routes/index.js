import React from 'react';
import Router from 'react-router';
import App from '../components/app/';
import Home from '../components/home';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
	<Route path="/" name="home" handler={App}>
    	<DefaultRoute handler={Home}/>
  	</Route>
)

export default routes;