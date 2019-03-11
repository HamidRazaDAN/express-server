import * as express from 'express';
import validation from './validation';
import TraineeController from './Controller';
import { validationHandler, authMiddleWare, TRAINEE_MODULE } from '../../libs';

const traineeRouter = express.Router();
const controller = new TraineeController();

traineeRouter
  .get('/read', validationHandler(validation.get), authMiddleWare(TRAINEE_MODULE, 'read'), controller.getList)
  .get('/read/:id', validationHandler(validation.read), authMiddleWare(TRAINEE_MODULE, 'read'), controller.read)
  .post('/create', validationHandler(validation.create), authMiddleWare(TRAINEE_MODULE, 'write'), controller.create)
  .put('/update', validationHandler(validation.update), authMiddleWare(TRAINEE_MODULE, 'write'), controller.update)
  .delete('/delete/:id', validationHandler(validation.delete), authMiddleWare(TRAINEE_MODULE, 'delete'), controller.delete);

export default traineeRouter;
