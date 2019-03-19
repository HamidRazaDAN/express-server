import { model } from 'mongoose';
import UserSchema from './UserSchema';

// const userSchema = new UserSchema({
//   collection: 'users',

//   toJSON: {
//     transform: (doc, ret) => {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//     },
//   },

//   toObject: {
//     transform: (doc, ret) => {
//       ret.id = ret._id;
//       delete ret._id;
//       delete ret.__v;
//     },
//   },
// });

const userCollection = 'users';
const userModel = model(userCollection, new UserSchema());

export default userModel;
