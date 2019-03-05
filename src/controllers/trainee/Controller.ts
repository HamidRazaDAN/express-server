import { Request, Response, NextFunction} from 'express';

export default class Controller {
  public create(req: Request, res: Response, next: NextFunction) {
    res.send('under create route.');
  }

  public read(req: Request, res: Response, next: NextFunction) {
    res.send('under read route.');
  }

  public update(req: Request, res: Response, next: NextFunction) {
    res.send('under update route.');
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    res.send('under delete route.');
  }
}
