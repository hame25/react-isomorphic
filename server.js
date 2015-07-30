import { name } from './package.json';
import config from 'config';
import express from 'express';
import { join as joinPath } from 'path';
import router from './components/server.js';

let app = express()
			.use(express.static(joinPath(__dirname, 'public')))
			.use(router());

let server = app.listen(
  config.get('port'),
  config.get('host'),
  () => console.log(`${name} started ${JSON.stringify(server.address())}`)
);