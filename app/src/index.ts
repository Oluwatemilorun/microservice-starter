import 'reflect-metadata';

import { PORT } from '@config';
import { APP_NAME } from '@shared/constants';
import logger from '@shared/logger';
import app from '@server';

// Start the server
const port = Number(PORT);

app.listen(port, () => {
	logger.info(`${APP_NAME} server started on port: ${PORT}`);
});
