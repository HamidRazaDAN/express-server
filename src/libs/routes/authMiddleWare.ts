import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import hasPermission from './permission';

export default (moduleName: string, permissionType: string) => (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization;
  let decode;

  try {
    decode = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
  } catch {
    return next({
      error: 'FORBIDDEN',
      message: 'Authentication Failed',
      status: 403,
    });
  }

  const { role } = decode;

  if (!hasPermission(moduleName, role, permissionType)) {
    return next({
      error: 'Access Denied',
      message: `${role} do not have permission to ${permissionType} for the module ${moduleName}`,
      status: 403,
    });
  }

  next();
};
