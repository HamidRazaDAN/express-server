import { model } from 'mongoose';
import UserSchema from './UserSchema';

const UserModel = model('users', UserSchema);

export default UserModel;
