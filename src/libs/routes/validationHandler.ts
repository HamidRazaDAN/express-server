import { NextFunction, Request, Response } from 'express';

export default (config) => (req: Request, res: Response, next: NextFunction) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const items = config[key];
    const value = items.in.map((item: string) => {
      return req[item][key];
    });
    const validatedValue = value.filter((item: any) => item);

    if (items && items.required) {
      if (value.length !== validatedValue.length) {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} is required`,
          status: 400,
        });
      }
    }

    if (items && items.string) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'string') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} should be string`,
          status: 400,
        });
      }
    }

    if (items && items.number) {
      if (validatedValue[0] && isNaN(validatedValue[0])) {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} should be number`,
          status: 400,
        });
      }
    }

    if (items && items.regex) {
      if (validatedValue[0]) {
        const regEx = RegExp(items.regex);
        if (!regEx.test(validatedValue[0])) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} should be in correct format`,
            status: 400,
          });
        }
      }
    }

    if (items && items.isObject) {
      if (validatedValue[0] && typeof validatedValue[0] !== 'object') {
        return next({
          error: 'BAD_REQUEST',
          message: `${key} should be object`,
          status: 400,
        });
      }
    }

    if (items && items.default) {
      if (validatedValue[0] === undefined) {
        items.in.map((item: string) => {
          req[item][key] = items.default;
        });
      }
    }

    if (items && items.custom) {
      if (validatedValue[0]) {
        items.custom(validatedValue[0]);
      }
    }
  });
  next();
};
