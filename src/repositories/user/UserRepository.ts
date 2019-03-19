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

  public async findOne(originalId) {
    return await super.findOne(originalId);
  }

  public async update(originalId, data) {
    return await super.update(originalId, data);
  }

  public async remove(originalId) {
    return await super.remove(originalId);
  }

  public async findByQuery(query) {
    return await super.findByQuery(query);
  }
}

export default new UserRepository(userModel);
