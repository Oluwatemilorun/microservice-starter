import { Request } from 'express';
import { IUser } from '@models/User.model';
import Auth from './auth.middleware';

export const ApolloContext = async ({ req }: { req: Request }) => {
	let auth = true;
	let user: IUser | null = null;
	const token = req.headers.authorization;

	if (!token) auth = false;
	else {
		try {
			user = await Auth(token.split(' ')[1]);
		} catch (error) {
			auth = false;
		}
	}

	return auth && user ? { user, auth } : { auth };
};
