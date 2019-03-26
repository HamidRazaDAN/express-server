import { connect, disconnect } from 'mongoose';
import seedData from './seedData';

export default class Database {
  public static async open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      connect(mongoURL, { useCreateIndex: true, useNewUrlParser: true })
      .then(() => {
        console.log('Connected Successfully to MongoDB');
        seedData();
        return resolve('Connected successfully to mongo');
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    });
  }

  public static close() {
    disconnect();
  }
}
