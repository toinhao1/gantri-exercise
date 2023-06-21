import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/users';

const userRouter = Router();

userRouter.post('/users', createUser);
userRouter.get('/users', getAllUsers);

export { userRouter };
