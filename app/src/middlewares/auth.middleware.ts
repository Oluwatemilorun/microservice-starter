import jwt from 'jsonwebtoken';
import { UNAUTHORIZED } from 'http-status-codes';

import User, { IUser } from '@models/User.model';
import { JWT_SECRET } from '@config';
import { Exception } from '@shared/functions';

export default async (token: string): Promise<IUser> => {
	try {
		const decoded = jwt.verify(token, JWT_SECRET);

		const user = await User.findOne({ _id: (decoded as IUser)._id });

		if (!user) throw new Exception(UNAUTHORIZED, 'auth failed/no user');

		return user;
	} catch (error) {
		return Promise.reject(error);
	}
};
