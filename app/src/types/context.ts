import { User } from '@models/User.model';

export interface AppContext {
	user: User;
	auth: boolean;
}
