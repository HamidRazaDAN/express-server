import * as mongoose from 'mongoose';

export default class Database {
  public static open(mongoURL: string) {
    return new Promise((resolve, reject) => {
      mongoose.connect(mongoURL, { useNewUrlParser: true })
      .then((result) => {
        return resolve('Connected successfully to mongo');
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }

  public static close() {
    mongoose.disconnect();
  }
}
