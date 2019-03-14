import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
  public static async open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoURL, { useCreateIndex: true, useNewUrlParser: true })
      .then(() => {
        seedData();
        return resolve('Connected successfully to mongo');
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    });
  }

  public static close() {
    mongoose.disconnect();
  }
}
