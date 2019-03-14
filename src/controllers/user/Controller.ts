import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs';
import { userRepository } from '../../repositories';

class UserController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name } = req.body;
      const data = { id, name };
      const result = await userRepository.create(data);
      res.status(200).send(successHandler('successfully read data.', 200, result));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id already exists.',
        status: 404,
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const query = { id };
      const result = await userRepository.findOne(query);
      res.status(200).send(successHandler('successfully read data.', 200, result));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id does not exist.',
        status: 404,
      });
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, dataToUpdate } = req.body;
      const query = { id };
      await userRepository.findOne(query);
      await userRepository.updateOne(query, dataToUpdate);
      res.status(200).send(successHandler('successfully updated data.', 200, dataToUpdate));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id does not exist.',
        status: 404,
      });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const query = { id };
      await userRepository.findOne(query);
      await userRepository.deleteOne(query);
      res.status(200).send(successHandler('successfully deleted data.', 200, id));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id already exists.',
        status: 404,
      });
    }
  }

  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { skip, limit } = req.query;
      const result = await userRepository.find(skip, limit);
      res.status(200).send(successHandler('successfully read data.', 200, result));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id already exists.',
        status: 404,
      });
    }
  }
}

export default new UserController();
