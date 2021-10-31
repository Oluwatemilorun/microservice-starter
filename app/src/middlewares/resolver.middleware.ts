import { AuthenticationError, ForbiddenError } from 'apollo-server-express';
import { ResolverMiddleware } from 'graphql-compose';
import { AppContext, VerificationLevel } from 'src/@types';
import { EmployeePermission, EmployeeRole, UserType } from '@models/User.model';

export const CheckAuth: ResolverMiddleware<any, AppContext> = async (
	next,
	s,
	a,
	c,
	i
) => {
	if (!c.auth) throw new AuthenticationError('Authentication failed');

	const res = await next(s, a, c, i);

	return res;
};

export const CheckVerification: (
	levels: VerificationLevel[]
) => ResolverMiddleware<any, AppContext> = (levels) => async (next, s, a, c, i) => {
	if (levels.includes(VerificationLevel.ACCOUNT)) {
		if (!c.user.phone_verified || !c.user.email_verified)
			throw new ForbiddenError('Account verification required.');
	}

	if (levels.includes(VerificationLevel.BVN)) {
		if (!c.user.bvn_verified) throw new ForbiddenError('BVN verification required.');
	}

	const res = await next(s, a, c, i);

	return res;
};

export const AttachCustomerToRecord: ResolverMiddleware<any, AppContext> = async (
	next,
	s,
	a,
	c,
	i
) => {
	a = {
		record: {
			...a.record,
			customer: c.user._id,
		},
	};

	const res = await next(s, a, c, i);

	return res;
};

export const CheckEmployee: (
	p: EmployeePermission[]
) => ResolverMiddleware<any, AppContext> = (p) => async (next, s, a, c, i) => {
	if (c.user.type !== UserType.EMPLOYEE)
		throw new ForbiddenError("You don't have access to perform this operation.");

	if (c.user.role == EmployeeRole.EMPLOYEE)
		p.forEach((perm) => {
			if (!c.user.permissions.includes(perm))
				throw new ForbiddenError("You don't have access to perform this operation.");
		});

	const res = await next(s, a, c, i);

	return res;
};
