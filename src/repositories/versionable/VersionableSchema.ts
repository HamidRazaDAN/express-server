import { Schema } from 'mongoose';

class VersionableSchema extends Schema {
  // constructor(baseSchema: any, options: any) {
  //   const versionSchema = Object.assign({
  //     createdAt: {
  //       default: Date.now,
  //       type: Date,
  //     },
  //     deletedAt: {
  //       required: false,
  //       type: Date,
  //     },
  //     originalId: {
  //       required: true,
  //       type: String,
  //     },
  //     updatedAt: {
  //       required: false,
  //       type: Date,
  //     },
  //   }, baseSchema);

  //   super(versionSchema, options);
  // }
  constructor(baseSchema: any) {
    const versionSchema = Object.assign({
      createdAt: {
        default: Date.now,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
      updatedAt: {
        required: false,
        type: Date,
      },
    }, baseSchema);

    super(versionSchema);
  }
}

export default VersionableSchema;
