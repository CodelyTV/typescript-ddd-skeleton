import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Controller } from './Controller';

export default class StatusGetController implements Controller {
	run(req: Request, res: Response): void {
		res.status(httpStatus.OK).send();
	}
}
