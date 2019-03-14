import * as express from 'express';
import { authMiddleWare, TRAINEE_MODULE, validationHandler } from '../../libs';
import traineeController from './Controller';
import traineeValidation from './validation';

const traineeRouter = express.Router();
const READ: string = 'read';
const WRITE: string = 'write';
const DELETE: string = 'delete';

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
