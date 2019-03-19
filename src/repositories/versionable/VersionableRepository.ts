import { Types } from 'mongoose';

class VersionableRepository {
  public static generateObjectId() {
    return String(Types.ObjectId());
  }

  constructor(private model) {}

  public async countDocuments() {
    return await this.model.countDocuments();
  }

  public async create(data) {
    const id = VersionableRepository.generateObjectId();
    const modelModified = new this.model({
      ...data,
      _id: id,
      originalId: id,
    });
    return await modelModified.save();
  }

  public async find(query) {
    const { limit, skip } = query;
    return await this.model.find({ deletedAt: undefined }, undefined, { limit, skip });
  }

  public async findOne(originalId) {
    const result = await this.model.findOne(originalId);
    if (!result) {
      throw new Error('Id does not exist.');
    }
    return result;
  }

  public async findByQuery(query) {
    return await this.model.findOne(query);
  }

  public async updateOne(query, data) {
    return await this.model.updateOne(query, data);
  }

  public async update(originalId, data) {
    const prevDoc = await this.findOne(originalId);
    const newDoc = prevDoc.toObject();
    const curDate = new Date();
    prevDoc.deletedAt = curDate;
    newDoc.updatedAt = curDate;
    newDoc._id = await VersionableRepository.generateObjectId();
    Object.assign(newDoc, data);

    await this.updateOne(originalId, prevDoc);
    return await this.model.create(newDoc);
  }

  public async remove(originalId) {
    const data = { deletedAt: new Date() };
    await this.findOne(originalId);
    return await this.updateOne(originalId, data);
  }
}

export default VersionableRepository;
