import * as dotenv from 'dotenv';
dotenv.config();

declare interface Config {
	SERVER_PORT: number | undefined;

	MYSQL_HOST: string;
	MYSQL_PORT: string;
	MYSQL_USER: string;
	MYSQL_PASSWORD: string;
	MYSQL_DATABASE: string;

	JWT_SECRET: string;
}

function fetchConfig(): Config {
	const env = process.env.NODE_ENV;
	try {
		return require(`../config.${env}.js`).default;
	} catch (e) {
		throw new Error(env + ' config variables not found');
	}
}

const config = fetchConfig();

export default config;
