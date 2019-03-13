import * as mysql from 'mysql';
import config from '../config';

export const sqlQuery = async (sql: any, attributes: any) => {
	const mysqlConnection = mysql.createPool({
		user: config.MYSQL_USER,
		database: config.MYSQL_DATABASE,
		host: config.MYSQL_HOST,
		password: config.MYSQL_PASSWORD,
		port: Number(config.MYSQL_PORT),
	});

	function query<T = any>(sql: string, attributes: any[]): Promise<any> {
		return new Promise((resolve, reject) => {
			mysqlConnection.query(sql, attributes, (err: mysql.MysqlError | null, rows: any) => {
				if (err) {
					reject(err);
				}
				resolve(rows);
			});
		});
	}
	const result = await query(sql, attributes);
	mysqlConnection.end();
	return result;
};

const mysqlConnection = mysql.createPool({
	user: config.MYSQL_USER,
	database: config.MYSQL_DATABASE,
	host: config.MYSQL_HOST,
	password: config.MYSQL_PASSWORD,
	port: Number(config.MYSQL_PORT),
});

export interface RowDataPackage<RowType> extends Array<RowType> {
	affectedRows: number;
}

export function query<T = any>(sql: string, attributes: any[]): Promise<any> {
	return new Promise((resolve, reject) => {
		mysqlConnection.query(sql, attributes, (err: mysql.MysqlError | null, rows: any) => {
			if (err) {
				reject(err);
			}
			resolve(rows);
		});
	});
}

export default mysqlConnection;
