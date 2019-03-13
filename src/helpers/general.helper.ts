import * as bcrypt from 'bcryptjs';

export const EncryptWithSalt = (key: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		try {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(key, salt);
			resolve(hash);
		} catch (error) {
			reject(error);
		}
	});
};
