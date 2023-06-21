import { Router } from 'express';
import { api } from './routes';
import { errorHandler } from '../middleware';

const v1 = Router();

v1.use(api);
v1.use(errorHandler);

export { v1 };
