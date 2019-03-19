import * as express from 'express';
import { authMiddleWare, DELETE, READ, USER_MODULE, validationHandler, WRITE } from '../../libs';
import userController from './Controller';
import userValidation from './validation';

const userRouter = express.Router();

userRouter
  .post(
    '/login',
    validationHandler(userValidation.login),
    userController.login,
  )
  .get(
    '/getDetail',
    authMiddleWare(USER_MODULE, READ),
    userController.getDetail,
  )
  .get(
    '/',
    validationHandler(userValidation.getList),
    authMiddleWare(USER_MODULE, READ),
    userController.getList,
  )
  .get(
    '/:id',
    validationHandler(userValidation.get),
    authMiddleWare(USER_MODULE, READ),
    userController.read,
  )
  .post(
    '/',
    validationHandler(userValidation.create),
    authMiddleWare(USER_MODULE, WRITE),
    userController.create,
  )
  .put(
    '/',
    validationHandler(userValidation.update),
    authMiddleWare(USER_MODULE, WRITE),
    userController.update,
  )
  .delete(
    '/:id',
    validationHandler(userValidation.delete),
    authMiddleWare(USER_MODULE, DELETE),
    userController.delete,
  );

export default userRouter;
