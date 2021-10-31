import { DB_URL } from '@config';
import { Connection, createConnection } from 'typeorm';

export class DB {
	private _connection?: Connection;

	public get connection() {
		return this._connection;
	}

	public init = async () => {
		this._connection = await createConnection({
			type: 'mysql',
			url: DB_URL,
		});
	};
}

export default new DB();
