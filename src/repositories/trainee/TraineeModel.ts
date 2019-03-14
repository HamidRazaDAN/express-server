import { model } from 'mongoose';
import TraineeSchema from './TraineeSchema';

const TraineeModel = model('trainees', TraineeSchema);

export default TraineeModel;
