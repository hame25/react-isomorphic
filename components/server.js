import {compileFile as compileFile} from 'jade';
import {join as joinPath} from 'path';
import React from 'react';
import Router from 'react-router';
import routes from '../routes'
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor'


let layoutPath = joinPath(__dirname, 'layout.jade');
let layout = compileFile(layoutPath);

export default () => {
  return (req, res) => {
    let url = req.url;
    let data = {
      header: {
        title: 'My title'
      }
    };

    data = Immutable.fromJS(data);

    //create cursor
    let cursor = Cursor.from(data);

    let templateLocals = {
      "data": data
    };

    Router.run(routes, url, Handler => {

      templateLocals.content = React.renderToString(
        <Handler cursor={cursor}/>
      );

      res.send(layout(templateLocals));
    });
  }
}