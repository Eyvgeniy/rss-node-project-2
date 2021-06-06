import { Request, Response, NextFunction } from 'express';
import errorHandler from '../common/errors/error-handler';
import { UserError } from '../models/UserError';

const errorMiddleware = (
  err: UserError,
  _: Request,
  res: Response,
  next: NextFunction
): void => {
  const { reason, statusText, status } = errorHandler(err);
  res.status(status).send({ reason, statusText });
  next();
};

export default errorMiddleware;
