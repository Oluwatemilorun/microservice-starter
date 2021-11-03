import 'reflect-metadata';

import { PORT } from '@config';
import { APP_NAME } from '@shared/constants';
import db from '@db/connection';
import logger from '@shared/logger';
import app from '@server';

// Connect to DB
db.init()
	.then(() => {
		logger.info('Connection to DB successful');

		// Start the server
		const port = Number(PORT);

		app.listen(port, () => {
			logger.info(`${APP_NAME} server started on port: ${PORT}`);
		});
	})
	.catch((err) => {
		logger.error(err);
	});
