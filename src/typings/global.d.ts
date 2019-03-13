import { Request, Response } from 'express';
import { ValidationChain } from 'express-validator/check';

declare interface Endpoint {
	handler: (req: Request, res: Response, next?: any) => any;
	validations: ValidationChain[];
}

declare interface RelationalChangeResponse {
	fieldCount: number;
	affectedRows: number;
	insertId: number;
	serverStatus: number;
	warningCount: number;
	message: number;
	protocol41: boolean;
	changedRows: number;
}
