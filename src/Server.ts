import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config/IConfig';
import { Database, errorHandler, notFoundRoute } from './libs';
import router from './router';

class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  public bootstrap() {
    try {
      this.initBodyParser();
      this.setupRoutes();
      return this;
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  public initBodyParser() {
    try {
      this.app.use(bodyParser.json());
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  public setupRoutes() {
    try {
      this.app.use('/', router);
      this.app.use(notFoundRoute);
      this.app.use(errorHandler);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  public async run() {
    try {
      const { MONGO_URL, PORT } = { ...this.config };
      const db = await Database.open(MONGO_URL);

      if (db) {
        this.app.listen(PORT, (err: Error) => {
          if (err) {
            console.log('Error: ', err);
          } else {
            console.log(`Server has started at port ${PORT}`);
          }
        });
        return this;
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }
}

export default Server;
