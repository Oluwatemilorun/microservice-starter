import 'express-async-errors';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import { SERVICE_UNAVAILABLE, NOT_FOUND } from 'http-status-codes';

import db from '@db/connection';
import logger from '@shared/logger';
import SetupV1Router from '@routes/v1';
import { COOKIE_SECRET } from '@config';

// Init express
const app = express();

// Connect to DB
db.init()
	.then(() => {
		logger.info('Connection to DB successful');
	})
	.catch((err) => {
		logger.error(err);
	});

// Set basic express settings
app.use(
	cors({
		origin: true, // ['http://localhost'],
		optionsSuccessStatus: 200,
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE_SECRET));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

// Add APIs
SetupV1Router(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(NOT_FOUND));
});

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	logger.error(err.message, err);

	res.status(err.status || SERVICE_UNAVAILABLE);
	return res.send({
		state: 'ERROR',
		message: err.message,
		payload: { ...err },
	});
});

//  TODO: Add favicon.

// Export express instance
export default app;
