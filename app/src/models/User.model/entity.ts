import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
