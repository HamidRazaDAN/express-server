import { NextFunction, Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { config } from '../../config';
import { successHandler } from '../../libs';
import { userRepository } from '../../repositories';

class UserController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password, role } = req.body;
      const data = { email, name, password, role };
      const result = await userRepository.create(data);
      res.status(200).send(successHandler('Successfully created data.', 200, result));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'email already exists.',
        status: 404,
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const query = { id };
      const result = await userRepository.findById(query);
      res.status(200).send(successHandler('Successfully read data.', 200, result));
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
      const { email, dataToUpdate } = req.body;
      const query = { email };
      await userRepository.findOne(query);
      await userRepository.updateOne(query, dataToUpdate);
      res.status(200).send(successHandler('Successfully updated data.', 200, dataToUpdate));
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
      await userRepository.findById(query);
      await userRepository.deleteOne(query);
      res.status(200).send(successHandler('Successfully deleted data.', 200, id));
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
      res.status(200).send(successHandler('Successfully read data.', 200, result));
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'Id already exists.',
        status: 404,
      });
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const query = { email, password };
      const result = await userRepository.findOne(query);
      const payload = {
        email: result.email,
        name: result.name,
        role: result.role,
      };
      const { PRIVATE_KEY } = config;
      const token = sign(payload, PRIVATE_KEY);
      res.header('Authorization', token).send(token);
    } catch {
      next({
        error: 'BAD_REQUEST',
        message: 'login credential is invalid.',
        status: 404,
      });
    }
  }

  public async getDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      res.status(200).send(successHandler('Successfully Read.', 200, data));
    } catch {
      next({
        error: 'FORBIDDEN',
        message: 'Authentication Failed',
        status: 403,
      });
    }
  }
}

export default new UserController();
