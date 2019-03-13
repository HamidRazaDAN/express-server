import * as express from 'express';
import { authMiddleWare, TRAINEE_MODULE, validationHandler } from '../../libs';
import TraineeController from './Controller';
import validation from './validation';

const traineeRouter = express.Router();
const controller = new TraineeController();

traineeRouter
  .get('/read', validationHandler(validation.get), authMiddleWare(TRAINEE_MODULE, 'read'), controller.getList)
  .get('/read/:id', validationHandler(validation.read), authMiddleWare(TRAINEE_MODULE, 'read'), controller.read)
  .post('/create', validationHandler(validation.create), authMiddleWare(TRAINEE_MODULE, 'write'), controller.create)
  .put('/update', validationHandler(validation.update), authMiddleWare(TRAINEE_MODULE, 'write'), controller.update)
  // tslint:disable-next-line:max-line-length
  .delete('/delete/:id', validationHandler(validation.delete), authMiddleWare(TRAINEE_MODULE, 'delete'), controller.delete);

export default traineeRouter;
