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
    const result = await modelModified.save();

    if (!result) {
      throw new Error('Creation Error.');
    }
    return result;
  }

  public async find(query) {
    const { limit, skip } = query;
    const result = await this.model.find({ deletedAt: undefined }, undefined, { limit, skip });
    if (!result) {
      throw new Error('Error Ocurred.');
    }
    return result;
  }

  public async findOne(originalId) {
    const result = await this.model.findOne({originalId, deletedAt: undefined});
    if (!result) {
      throw new Error('Id does not exist.');
    }
    return result;
  }

  public async checkEmail(email) {
    const result = await this.model.findOne({ email, deletedAt: undefined });
    if (!result) {
      throw new Error('Email Incorrect.');
    }
    return result;
  }

  public async updateOne(originalId, data) {
    const result = await this.model.updateOne({originalId, deletedAt: undefined}, data);
    if (!result) {
      throw new Error('Updation Error.');
    }
    return result;
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
    const result = await this.model.create(newDoc);
    if (!result) {
      throw new Error('Updation Error.');
    }
    return result;

  }

  public async remove(originalId) {
    const data = { deletedAt: new Date() };
    await this.findOne(originalId);
    return await this.updateOne(originalId, data);
  }
}

export default VersionableRepository;
