import {compileFile as compileFile} from 'jade';
import {join as joinPath} from 'path';
import React from 'react';
import Router from 'react-router';
import routes from '../routes'

let layoutPath = joinPath(__dirname, 'layout.jade');
let layout = compileFile(layoutPath);

export default () => {
  return (req, res) => {
    let url = req.url;
    let data = {};

    let templateLocals = {
      "data": data
    };

    Router.run(routes, url, Handler => {

      templateLocals.content = React.renderToString(
        <Handler cursor={data}/>
      );

      res.send(layout(templateLocals));
    });
  }
}