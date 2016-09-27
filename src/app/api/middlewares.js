import bodyParser from 'body-parser';
import expressDeliver from 'express-deliver';

export default function(app){

    app.use(expressDeliver);

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));
}
