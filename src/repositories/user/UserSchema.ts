import { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
});

export default UserSchema;
