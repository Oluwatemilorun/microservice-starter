import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { SERVICE_UNAVAILABLE } from 'http-status-codes';

import logger from '../logger';

interface Exception {
	code: number;
	message: string;
}

export const Exception = function (this: Exception, code: number, message: string) {
	this.code = code;
	this.message = message;
} as unknown as { new (code: number, message: string): Exception };

export const pErr = (err: Error): void => {
	if (err) {
		logger.error(err);
	}
};

export const ErrorHandler = (
	err: HttpError,
	req: Request,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	logger.error(err.message, err);

	res.status(err.status || SERVICE_UNAVAILABLE);

	return res.send({
		state: 'ERROR',
		message: err.message,
		errors: err.errors || [err.error || err],
	});
};
