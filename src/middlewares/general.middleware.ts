import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config';
import { Endpoint } from '../typings/global';
import * as Model from '../models/general.model';
import { check, validationResult } from 'express-validator/check';

export const ValidateJWT = (request: Request, response: Response, next: any) => {
	// get headers
	const token = request.headers['authorization'];
	try {
		if (token && typeof token === 'string') {
			const decoded = jwt.verify(token, config.JWT_SECRET);
			if (decoded) {
				next();
			} else {
				return response.status(503).send({
					msg: `Invalid access token`,
					code: 32487,
				});
			}
		} else {
			return response.status(503).send({
				msg: `Invalid access token`,
				code: 2564,
			});
		}
	} catch (error) {
		console.log('Error');
		return response.status(500).send({
			msg: `Internal Error`,
			code: 16331,
		});
	}
};