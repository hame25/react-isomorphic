import {compileFile as compileFile} from 'jade';
import {join as joinPath} from 'path';
import React from 'react';
import Router from 'react-router';
import routes from '../routes'
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import fetchData from '../utils/fetchData';

let layoutPath = joinPath(__dirname, 'layout.jade');
let layout = compileFile(layoutPath);

export default () => {
  return (req, res) => {

    let router = Router.create({
      routes: routes,
      location: req.url
    });

    let data;

    router.run((Handler, state) => {

        fetchData(state).then((data) => {

          data.header = {title: 'inital title'};
  
          data = Immutable.fromJS(data);
          
          let cursor = Cursor.from(data);

          let templateLocals = {
            "data": data
          };
          
          templateLocals.content = React.renderToString(
          
            <Handler cursor={cursor}/>
          );
          res.send(layout(templateLocals));
        });
    });
  }
}
