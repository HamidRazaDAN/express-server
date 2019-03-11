import { Router } from 'express';
import { traineeRouter } from './controllers'

const router = Router();
router.use('/trainee', traineeRouter);

export default router;
