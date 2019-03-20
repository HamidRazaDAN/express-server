import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  return next({
    error: 'Not Found',
    message: 'Not Found Route',
    status: 404,
  });
};
