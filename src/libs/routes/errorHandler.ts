import { Error, NextFunction, Request, Response } from 'express';

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { error, message, status } = err;
  const errMsg = {
    error: error || 'Undefined',
    message: message || 'Error Ocurred',
    status: status || 200,
    timestamp: new Date(),
  };

  res.status(status).send(errMsg);
  next();
};
