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
