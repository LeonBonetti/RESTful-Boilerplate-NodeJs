import { query } from '../config/database.config';
import { RelationalChangeResponse } from '../typings/global';

export const getData = async (): Promise<Object | undefined> => {
	const select = await query(
		`
        SELECT * from table
        `,
		[],
	);
	return select ? select[0] : undefined;
};

export const insertData = async ({value1, value2}: {value1: string, value2: number}): Promise<boolean> => {
	const insert: RelationalChangeResponse = await query(`
		insert into table values (?,?)
	`, [value1, value2]);
	return insert.affectedRows == 1 ? true : false;
};