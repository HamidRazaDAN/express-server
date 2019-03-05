import * as express from 'express';
import Controller from './Controller';

const traineeRouter = express.Router();
const controller = new Controller();

traineeRouter.get('/read', controller.read);
traineeRouter.post('/create', controller.create);
traineeRouter.put('/update', controller.update);
traineeRouter.delete('/delete', controller.delete);

export default traineeRouter;
