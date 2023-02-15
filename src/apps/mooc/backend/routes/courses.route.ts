import { Request, Response, Router } from 'express';

import { CoursePutController } from '../controllers/CoursePutController';
import container from '../dependency-injection';

export const register = (router: Router): void => {
	const coursePutController = container.get<CoursePutController>(
		'Apps.mooc.controllers.CoursePutController'
	);
	router.put('/courses/:id', (req: Request, res: Response) => coursePutController.run(req, res));
};
