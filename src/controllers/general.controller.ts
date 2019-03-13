import { Endpoint } from '../typings/global';
import * as Model from '../models/general.model';
import { Request, Response } from 'express';
import { check, validationResult } from 'express-validator/check';

export const BaseController: Endpoint = {
	validations: [],
	handler: async (request: Request, response: Response) => {
		// check schema validations
		const schemaErrors = validationResult(request);
		if (!schemaErrors.isEmpty()) {
			return response.status(403).send(schemaErrors.array());
		}
	},
};
