import { Schema } from 'mongoose';

const TraineeSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
});

export default TraineeSchema;
