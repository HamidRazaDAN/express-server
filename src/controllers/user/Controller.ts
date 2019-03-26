import { compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../../config';
import { successHandler } from '../../libs';
import { userRepository } from '../../repositories';

class UserController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, name, password, role } = req.body;
      const data = { email, name, password, role };
      const result = await userRepository.create(data);
      res.status(200).send(successHandler('Successfully Created.', 200, result));
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await userRepository.findOne(id);
      res.status(200).send(successHandler('Successfully Read.', 200, result));
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, dataToUpdate } = req.body;
      const result = await userRepository.update(id, dataToUpdate);
      res.status(200).send(successHandler('Successfully Updated.', 200, result));
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await userRepository.remove(id);
      res.status(200).send(successHandler('Successfully Deleted.', 200, id));
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { skip, limit } = req.query;
      const query = { skip, limit };
      const result = await userRepository.find(query);
      res.status(200).send(successHandler('Successfully Read.', 200, result));
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await userRepository.checkEmail(email);
      const hash = result.password;
      const match = await compare(password, hash);
      if (!match) {
        throw new Error('Password Incorrect.');
      }
      const payload = {
        email: result.email,
        name: result.name,
        role: result.role,
      };
      const { PRIVATE_KEY } = config;
      const token = sign(payload, PRIVATE_KEY, { expiresIn: '0.25h' });
      res.header('Authorization', token).send(token);
    } catch (err) {
      next({
        error: 'BAD_REQUEST',
        message: err.message,
        status: 404,
      });
    }
  }

  public async getDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { data } = req.body;
      res.status(200).send(successHandler('Successfully Read.', 200, data));
    } catch (err) {
      next({
        error: 'FORBIDDEN',
        message: err.message,
        status: 403,
      });
    }
  }
}

export default new UserController();
