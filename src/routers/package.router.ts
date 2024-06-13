import { Router } from 'express';
import packagesController from '../controllers/packages.controller';

const packagesRouter = Router();

packagesRouter.patch('/packages/:id', packagesController.update);
packagesRouter.delete('/packages/:id', packagesController.exclude);

export default packagesRouter;