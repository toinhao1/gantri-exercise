import { Router } from 'express';

import { userRouter } from './users';
import { artRouter } from './art';

const api = Router();

api.use(artRouter);
api.use(userRouter);

export { api };
