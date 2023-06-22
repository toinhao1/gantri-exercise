import { Router } from 'express';
import { getSelectArt, getAllArt, createComment } from '../controllers/art';

const artRouter = Router();

artRouter.get('/art', getAllArt);
artRouter.get('/art/:id', getSelectArt);

artRouter.post('/art/:id/comments', createComment);

export { artRouter };
