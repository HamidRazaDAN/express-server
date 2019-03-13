import  bodyParser = require( 'body-parser');
import * as express from 'express';
import { IConfig } from './config/IConfig';
import { Database, errorHandler, notFoundRoute } from './libs';
import router from './router';

export default class Server {
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
      console.log('error ', err);
    }
  }

  public initBodyParser() {
    try {
      this.app.use(bodyParser.json());
    } catch (err) {
      console.log('error ', err);
    }
  }

  public setupRoutes() {
    try {
      this.app.use('/', router);
      this.app.use(notFoundRoute);
      this.app.use(errorHandler);
    } catch (err) {
      console.log('error ', err);
    }
  }

  public async run() {
    try {
      const { MONGO_URL, port } = {...this.config};
      const db = await Database.open(MONGO_URL);

      if (db) {
        this.app.listen(port, (err: Error) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`Server has started at port ${port}`);
          }
        });
        return this;
      }
    } catch (err) {
      console.log('error ', err);
    }
  }
}
