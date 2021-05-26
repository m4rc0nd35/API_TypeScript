/* 
* Create 2021-05-13 
* By M4rc0nd35 
*/
import cors from 'cors';

const options: cors.CorsOptions = {
		allowedHeaders: [
		  'Origin',
		  'X-Requested-With',
		  'Content-Type',
		  'Accept',
		  'X-Access-Token',
		],
		credentials: false,
		methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
		origin: "*",
		preflightContinue: false,
	  };
	  
export const headerConfig = cors(options);