import * as express from 'express';
import validation from './validation';
import TraineeController from './Controller';
import { validationHandler } from '../../libs';

const traineeRouter = express.Router();
const controller = new TraineeController();

traineeRouter
  .get('/read/:id', validationHandler(validation.read) ,controller.read)
  .post('/create', validationHandler(validation.create), controller.create)
  .put('/update', validationHandler(validation.update), controller.update)
  .delete('/delete/:id', validationHandler(validation.delete), controller.delete);

export default traineeRouter;
