import UserModel from './UserModel';

class UserRepository {
  public async countDocuments() {
    return await UserModel.countDocuments();
  }

  public async create(data) {
    return await UserModel.create(data);
  }

  public async find(skip: number, limit: number) {
    return await UserModel.find().skip(skip).limit(limit);
  }

  public async findOne(query) {
    const result = await UserModel.findOne(query).lean();
    if (!result) {
      throw new Error();
    }
    return result;
  }

  public async findById(query) {
    return await UserModel.findById(query);
  }

  public async updateOne(query, data) {
    return await UserModel.updateOne(query, data);
  }

  public async deleteOne(query) {
    return await UserModel.deleteOne(query);
  }
}

export default new UserRepository();
