import { IConfig } from "./config/IConfig";
import * as express from 'express';

export default class Server {
  private app: express.Express;

  constructor(private config: IConfig) {
    this.app = express();
  }

  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    this.app.get('/health-check', (req: express.Request, res: express.Response) => {
      res.send('I am OK!!');
    });
  }

  run() {
    const {port} = {...this.config};

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
