import { Router } from 'express';

import { userRouter } from './users';

const api = Router();

api.use(userRouter);

export { api };
