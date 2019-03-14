import * as express from 'express';
import { authMiddleWare, USER_MODULE, validationHandler } from '../../libs';
import userController from './Controller';
import userValidation from './validation';

const userRouter = express.Router();
const READ: string = 'read';
const WRITE: string = 'write';
const DELETE: string = 'delete';

userRouter
  .get(
    '/read',
    validationHandler(userValidation.getList),
    authMiddleWare(USER_MODULE, READ),
    userController.getList,
  )
  .get(
    '/read/:id',
    validationHandler(userValidation.get),
    authMiddleWare(USER_MODULE, READ),
    userController.read,
  )
  .post(
    '/create',
    validationHandler(userValidation.create),
    authMiddleWare(USER_MODULE, WRITE),
    userController.create,
  )
  .put(
    '/update',
    validationHandler(userValidation.update),
    authMiddleWare(USER_MODULE, WRITE),
    userController.update,
  )
  .delete(
    '/delete/:id',
    validationHandler(userValidation.delete),
    authMiddleWare(USER_MODULE, DELETE),
    userController.delete,
  );

export default userRouter;
