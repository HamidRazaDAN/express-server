import { Request, Response, NextFunction} from 'express';
import { successHandler } from '../../libs';
import data from '../../data';

export default class TraineeController {
  public create(req: Request, res: Response, next: NextFunction) {
    const { id, name } = req.body;
    let flag: boolean = true;

    data.every(value => {
      if(value.id === id) {
        flag = false;
        return false;
      }
      return true;
    });

    if(flag) {
      const userData = {
        id: id,
        name: name
      };
      data.push(userData);
      res.status(200).send(successHandler('Successfully Created', 200, userData));
    } else {
      next({
        error: 'BAD_REQUEST',
        message: 'Id already exist',
        status: 404
      });
    }
  }

  public read(req: Request, res: Response, next: NextFunction) {
    let flag: boolean = true;

    data.every(value => {
      if(value.id === req.params.id) {
        const userData = {
          id: value.id,
          name: value.name
        }
        res.status(200).send(successHandler('Successfully Read', 200, userData));

        flag = false;
        return false;
      }
      return true;
    });

    if(flag) {
      next({
        error: 'BAD_REQUEST',
        message: 'Id does not exist',
        status: 404
      });
    }
  }

  public update(req: Request, res: Response, next: NextFunction) {
    const { id, dataToUpdate: { name } } = req.body;
    let flag: boolean = false;

    data.every(value => {
      if(value.id === id) {
        value.name = name;
        flag = true;
        return false;
      }
      return true;
    });

    if(flag) {
      const userData = {
        id: id,
        name: name
      }
      res.status(200).send(successHandler('Successfully Updated', 200, userData));
    } else {
      next({
        error: 'BAD_REQUEST',
        message: 'Id does not exist',
        status: 404
      });
    }
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    let flag: boolean = true;

    data.every((value, index) => {
      if(value.id === id) {
        const userData = {
          id: id,
          name: value.name
        }
        data.splice(index, 1);
        res.status(200).send(successHandler('Successfully Deleted', 200, userData));
        flag = false;
        return false;
      }
      return true;
    });

    if(flag) {
      next({
        error: 'BAD_REQUEST',
        message: 'Id does not exist',
        status: 404
      });
    }
  }

  public getList(req: Request, res: Response, next: NextFunction) {
    let limit: number = data.length, skip: number = 0, msg: string, flag: boolean = true;

    if(req.query.limit) {
      limit = parseInt(req.query.limit, 10);
    }

    if(req.query.skip) {
      skip = parseInt(req.query.skip, 10);
    }

    if(limit <= 0) {
      msg = 'Limit should be greater than zero.';
      flag = false;
    }

    if(skip < 0) {
      msg = 'Skip can not be lesser than zero.';
      flag = false;
    }

    if(flag) {
      const userData = data.slice(skip, (limit + skip));
      res.status(200).send(successHandler('Successfully Read', 200, userData));
    } else {
      next({
        error: 'BAD_REQUEST',
        message: msg,
        status: 400
      });
    }
  }
}
