import TraineeModel from './TraineeModel';

class TraineeRepository {
  public async create(data) {
    return await TraineeModel.create(data);
  }

  public async find(skip: number, limit: number) {
    return await TraineeModel.find().skip(skip).limit(limit);
  }

  public async findOne(query) {
    const result = await TraineeModel.findOne(query);
    if (!result) {
      throw new Error();
    }
    return result;
  }

  public async updateOne(query, data) {
    return await TraineeModel.updateOne(query, data);
  }

  public async deleteOne(query) {
    return await TraineeModel.deleteOne(query);
  }
}

export default new TraineeRepository();
