import { VersionableSchema } from '../versionable';

class UserSchema extends VersionableSchema {
  // constructor(options: any) {
  //   const baseSchema = {
  //     _id: String,
  //     email: String,
  //     name: String,
  //     password: String,
  //     role: String,
  //   };

  //   super(baseSchema, options);
  // }
  constructor() {
    const baseSchema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };

    super(baseSchema);
  }
}

export default UserSchema;
