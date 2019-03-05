import { IConfig } from "./config/IConfig";
import * as express from 'express';
import { notFoundRoute } from './libs';
import { traineeRouter } from './controllers';

export default class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  initBodyParser() {

  }

  setupRoutes() {
    this.app.use('/trainee', traineeRouter);

    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send(notFoundRoute());
    });
  }

  run() {
    const { port } = {...this.config};

    this.app.listen(port, (err: Error) => {
      if(err) {
        console.log(err);
      } else {
        console.log(`Server has started at ${port} port`);
      }
    });

    return this;
  }
}
