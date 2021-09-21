import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const coursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', (req: Request, res: Response) => coursePutController.run(req, res));
};
