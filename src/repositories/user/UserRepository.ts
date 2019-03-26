import { VersionableRepository } from '../versionable';
import userModel from './userModel';

class UserRepository extends VersionableRepository {
  constructor(model) {
    super(model);
  }

  public async countDocuments() {
    return await super.countDocuments();
  }

  public async create(data) {
    return await super.create(data);
  }

  public async find(query) {
    return await super.find(query);
  }

  public async findOne(originalId: string) {
    return await super.findOne(originalId);
  }

  public async update(originalId: string, data) {
    return await super.update(originalId, data);
  }

  public async remove(originalId: string) {
    return await super.remove(originalId);
  }

  public async checkEmail(email: string) {
    return await super.checkEmail(email);
  }
}

export default new UserRepository(userModel);
