import { all as all } from 'when/keys';

let fetchData = module.exports = (routerState, cursor) => {

  let { params, query } = routerState;

  return all(routerState.routes.filter((route) => {

    return route.handler.fetchData;

  }).reduce((promises, route) => {

    promises[route.name] = route.handler.fetchData(cursor);
    return promises;

  }, {}));
};