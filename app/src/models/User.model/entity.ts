import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *          type: string
 *       firstName:
 *          type: string
 *       middleName:
 *          type: string
 *       lastName:
 *          type: string
 *       createdAt:
 *          type: string
 */
@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	firstName: string;

	@Column()
	middleName?: string;

	@Column()
	lastName: string;

	@Column({ select: false })
	password: string;

	@CreateDateColumn()
	createdAt: string;
}
