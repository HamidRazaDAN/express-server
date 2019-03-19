import { IVersionableModel } from '../versionable';

interface IUserModel extends IVersionableModel {
  email: string;
  name: string;
  password: string;
  role: string;
}

export default IUserModel;
