import config from '~/src/lib/config';
import expressDeliver from 'express-deliver';

const debug = require('debug')(config.appName+':handlers');

export default function(app){

	//404 and 500
   expressDeliver.handlers(app)

   expressDeliver.on('error',function(err){
	   debug('error', err._request.url, err.code, err.message,err.data,err.stack);
   })

};
