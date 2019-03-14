import UserModel from './UserModel';

class UserRepository {
  public async create(data) {
    return await UserModel.create(data);
  }

  public async find(skip: number, limit: number) {
    return await UserModel.find().skip(skip).limit(limit);
  }

  public async findOne(query) {
    const result = await UserModel.findOne(query);
    if (!result) {
      throw new Error();
    }
    return result;
  }

  public async updateOne(query, data) {
    return await UserModel.updateOne(query, data);
  }

  public async deleteOne(query) {
    return await UserModel.deleteOne(query);
  }
}

export default new UserRepository();
