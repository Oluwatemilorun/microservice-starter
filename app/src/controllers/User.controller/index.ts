import { User } from '@models/User.model';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller('/user')
class UserController {
	@Post()
	create(@Body() user: User) {
		// ===
	}

	@Get('/:id')
	profile(@Param('id') id: string) {
		// ===
	}

	@Put('/:id')
	update(@Param('id') id: string) {
		// ===
	}

	@Delete('/:id')
	remove(@Param('id') id: string) {
		// ===
	}
}

export default UserController;
