import { User } from '@models/User.model';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller('/auth')
class AuthController {
	@Post()
	login(@Body() user: User) {
		// ===
	}

	@Post()
	refreshToken(@Body() user: User) {
		// ===
	}
}

export default AuthController;
