import { Router } from 'express';
import { traineeRouter, userRouter } from './controllers';

const router = Router();

router
  .use('/trainee', traineeRouter)
  .use('/user', userRouter);

export default router;
