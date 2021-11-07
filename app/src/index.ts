import 'reflect-metadata';
import '@shared/types/modules';

import { PORT } from '@config';
import { APP_NAME } from '@shared/constants';
import db from '@db/connection';
import logger from '@shared/logger';
import app from '@server';

process.on('unhandledRejection', function (reason, p) {
	logger.warn('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

// Connect to DB
db.init()
	.then(() => {
		// Start the server
		const port = Number(PORT);

		app.listen(port, () => {
			logger.info(`
			------------
			${APP_NAME} Server Started!

			URL: http://localhost:${port}
			Health: http://localhost:${port}/health
			API Doc: http://localhost:${port}/api-docs
			------------
			`);
		});
	})
	.catch((err) => {
		logger.error(err);
	});
