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
    let flag: boolean = false;
    let userData = {
      id: '',
      name: ''
    };

    data.every(value => {
      if(value.id === req.params.id) {
        flag = true;
        userData = {
          id: value.id,
          name: value.name
        }
        return false;
      }
      return true;
    });

    if(flag) {
      res.status(200).send(successHandler('Successfully Read', 200, userData));
    } else {
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
}
