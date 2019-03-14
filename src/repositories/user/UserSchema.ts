import { Schema } from 'mongoose';

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
});

export default UserSchema;
