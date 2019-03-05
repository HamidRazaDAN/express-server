import { IConfig } from "./config/IConfig";
import * as express from 'express';
import { notFoundRoute } from './libs';

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
    const { app } = this;

    app.get('/health-check', (req: express.Request, res: express.Response) => {
      res.send('I am OK!!');
    });

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
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
