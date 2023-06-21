import { Router } from 'express';
import { getSelectArt, getAllArt } from '../controllers/art';

const artRouter = Router();

artRouter.get('/art', getAllArt);
artRouter.get('/art/:id', getSelectArt);

export { artRouter };
