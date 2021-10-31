import { Express } from 'express';
import { useExpressServer } from 'routing-controllers';

import UserController from '@controllers/User.controller';
import AuthController from '@controllers/Auth.controller';

const SetupV1Router = (app: Express) => {
	useExpressServer(app, {
		controllers: [UserController, AuthController],
		routePrefix: '/v1',
	});
};

export default SetupV1Router;
