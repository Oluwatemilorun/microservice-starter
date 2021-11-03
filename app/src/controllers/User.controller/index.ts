import { User } from '@models/User.model';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller('/user')
class UserController {
	/**
	 * @swagger
	 * /user:
	 *   post:
	 *     description: Create a new user
	 *     operationId: createUser
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: User model
	 *         schema:
	 *           $ref: '#/definitions/User'
	 */
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
