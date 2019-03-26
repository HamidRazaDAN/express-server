import { Router } from 'express';
import { authMiddleWare, DELETE, READ, TRAINEE_MODULE, validationHandler, WRITE } from '../../libs';
import traineeController from './Controller';
import traineeValidation from './validation';

const traineeRouter = Router();

traineeRouter
  .get(
    '/read',
    validationHandler(traineeValidation.getList),
    authMiddleWare(TRAINEE_MODULE, READ),
    traineeController.getList,
  )
  .get(
    '/read/:id',
    validationHandler(traineeValidation.get),
    authMiddleWare(TRAINEE_MODULE, READ),
    traineeController.read,
  )
  .post(
    '/create',
    validationHandler(traineeValidation.create),
    authMiddleWare(TRAINEE_MODULE, WRITE),
    traineeController.create,
  )
  .put(
    '/update',
    validationHandler(traineeValidation.update),
    authMiddleWare(TRAINEE_MODULE, WRITE),
    traineeController.update,
  )
  .delete(
    '/delete/:id',
    validationHandler(traineeValidation.delete),
    authMiddleWare(TRAINEE_MODULE, DELETE),
    traineeController.delete,
  );

export default traineeRouter;
