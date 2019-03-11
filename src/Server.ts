import { IConfig } from "./config/IConfig";
import * as express from 'express';
import  bodyParser = require( 'body-parser');
import { notFoundRoute, errorHandler } from './libs';
import router from './router';

export default class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap() {
    try {
      this.initBodyParser();
      this.setupRoutes();
      return this;
    } catch(err) {
      console.log('error ', err);
    }
  }

  initBodyParser() {
    try {
      this.app.use(bodyParser.json());
    } catch(err) {
      console.log('error ', err);
    }
  }

  setupRoutes() {
    try {
      this.app.use('/', router);
      this.app.use(notFoundRoute);
      this.app.use(errorHandler);
    } catch(err) {
      console.log('error ', err);
    }
  }

  run() {
    try {
      const { port } = {...this.config};
      this.app.listen(port, (err: Error) => {
        if(err) {
          console.log(err);
        } else {
          console.log(`Server has started at port ${port}`);
        }
      });
      return this;
    } catch(err) {
      console.log('error ', err);
    }
  }
}
