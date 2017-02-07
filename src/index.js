//Globals
global.__basedir = __dirname;
global.params = require('~/package.json');

const debug = require('debug')(config.appName);

//Dependencies
import express from 'express';
import expressDeliver from 'express-deliver';

//Libraries
import config from './lib/config';

//services
import { DbService } from './lib/services';


if (config.db) {
	DbService.connect();
}

//apps
import api from './app/api';

const app = express();
const port = config.port;


api.middlewares(app);
api.routes(app);
api.handlers(app);

expressDeliver.handlers(app);

app.listen(port,function(){
	debug(`>>> API http listening ${port}`);
});
