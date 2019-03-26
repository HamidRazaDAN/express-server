import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from '../../config';
import { userRepository } from '../../repositories';
import hasPermission from './permission';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization;
  let decode;

  try {
    const { PRIVATE_KEY } = config;
    decode = verify(token, PRIVATE_KEY);
  } catch {
    return next({
      error: 'FORBIDDEN',
      message: 'Authentication Failed',
      status: 403,
    });
  }

  const { email, role } = decode;

  try {
    userRepository.checkEmail(email);
  } catch {
    return next({
      error: 'Access Denied',
      message: 'User does not exist',
      status: 403,
    });
  }

  if (!hasPermission(moduleName, role, permissionType)) {
    return next({
      error: 'Access Denied',
      message: `${role} do not have permission to ${permissionType} for the ${moduleName} module`,
      status: 403,
    });
  }

  req.body.data = decode;

  next();
};
