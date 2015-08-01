import { name } from './package.json';
import config from 'config';
import express from 'express';
import routes from './routes';

let app = express()
			.use(routes);

let server = app.listen(
  config.get('port'),
  config.get('host'),
  () => console.log(`${name} started ${JSON.stringify(server.address())}`)
);