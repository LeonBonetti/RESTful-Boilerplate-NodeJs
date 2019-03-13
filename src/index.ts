// Imports
import * as morgan from 'morgan';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import config from './config';
import general_routes from './routers/general.router';
import { ValidateJWT } from './middlewares/general.middleware';

const port: any = config.SERVER_PORT;

const app: any = express();

app.use(morgan(process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'));

app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);

app.use(bodyParser.json());

app.use(function(req: any, res: any, next: any) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', false);
	// Pass to next layer of middleware
	next();
});
app.disable('x-powered-by');

app.use('*/restrict/*', ValidateJWT);
app.use('/', general_routes);

app.listen(port, () => {
	console.log('Running on %s', port);
});
